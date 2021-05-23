package agh.fis.payment_management.service;

import agh.fis.payment_management.model.PaymentDto;
import agh.fis.payment_management.model.PaymentEntity;
import agh.fis.payment_management.model.PaymentStatus;
import agh.fis.payment_management.repository.PaymentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    @Autowired
    private PaymentRepository paymentRepository;

    private PaymentDto getPaymentDtoFromPaymentEntity(PaymentEntity paymentEntity){
            PaymentDto paymentDto = new PaymentDto();
            paymentDto.setId(paymentEntity.getId());
            paymentDto.setPaymentProvider(paymentEntity.getPaymentProvider());
            paymentDto.setPaymentStatus(paymentEntity.getPaymentStatus());
            paymentDto.setDate(paymentEntity.getDate().toString());
            paymentDto.setPrice(paymentEntity.getPrice());
            return paymentDto;
    }

    public PaymentDto createPayment(PaymentDto paymentDto){
        java.util.Date utilDate = new java.util.Date();
        PaymentEntity p = new PaymentEntity(paymentDto.getPaymentProvider(), new Date(utilDate.getTime()), paymentDto.getPrice(), PaymentStatus.PENDING);

        paymentRepository.save(p);

        paymentDto.setId(p.getId());
        paymentDto.setPaymentStatus(p.getPaymentStatus());
        paymentDto.setDate(p.getDate().toString());

        logger.info("New {} payment with id: {} created",paymentDto.getPaymentStatus(), paymentDto.getId());
        return paymentDto;
    }

    public List<PaymentDto> getAllPayments(){
        List<PaymentEntity> fetchedPaymentEntities = paymentRepository.findAll();
        List<PaymentDto> paymentDtos = new ArrayList<>();
        for (PaymentEntity paymentEntity: fetchedPaymentEntities) {
            paymentDtos.add(getPaymentDtoFromPaymentEntity(paymentEntity));
        }
        logger.info("Returning a list of {} Payment Entites", paymentDtos.size());
        return paymentDtos;
    }

    public PaymentDto getPaymentById(Integer id){
        Optional<PaymentEntity> paymentEntity = paymentRepository.findById(id);
        if (paymentEntity.isPresent()){
            logger.info("Returning Payment with id: {}", paymentEntity.get().getId());
            return getPaymentDtoFromPaymentEntity(paymentEntity.get());
        }
        logger.warn("Payment with id: {} does not exist", id);
        throw new ResponseStatusException(HttpStatus.NO_CONTENT,  "Payment with given id does not exist");
    }

    public Void deletePaymentById(Integer id){
        Optional<PaymentEntity> paymentEntity = paymentRepository.findById(id);
        if (paymentEntity.isPresent()){
            paymentRepository.delete(paymentEntity.get());
            logger.info("Deleted Payment with id: {}", paymentEntity.get().getId());
        }
        logger.warn("Deletion aborted! Payment with id: {} does not exist", id);
        throw new ResponseStatusException(HttpStatus.NO_CONTENT,  "Payment with given id does not exist");
    }

    public PaymentDto updatePayment(PaymentDto paymentDto){
        Optional<PaymentEntity> paymentEntityOptional = paymentRepository.findById(paymentDto.getId());
        PaymentEntity paymentEntity;
        if (paymentEntityOptional.isPresent()){
            paymentEntity = paymentEntityOptional.get();
            paymentEntity.setPaymentStatus(paymentDto.getPaymentStatus());
            paymentEntity.setPaymentProvider(paymentDto.getPaymentProvider());

            try {
                paymentEntity.setDate(paymentDto.getDate());
            } catch (Exception e) {
                logger.error("Omitting payment date update due to exception:", e);
            }

            paymentEntity.setPrice(paymentDto.getPrice());
            paymentRepository.save(paymentEntity);

            logger.info("Updated Payment with id: {}", paymentEntity.getId());
            return getPaymentDtoFromPaymentEntity(paymentEntity);
        }
        logger.warn("Update aborted! Payment with id: {} does not exist", paymentDto.getId());
        throw new ResponseStatusException(HttpStatus.NO_CONTENT,  "Payment with given id does not exist");

    }
}
