package agh.fis.payment_management.service;

import agh.fis.payment_management.model.PaymentDto;
import agh.fis.payment_management.model.PaymentEntity;
import agh.fis.payment_management.model.PaymentStatus;
import agh.fis.payment_management.repository.PaymentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {
    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentDto createPayment(PaymentDto paymentDto){
        java.util.Date utilDate = new java.util.Date();

        PaymentEntity p = new PaymentEntity(paymentDto.getPaymentProvider(), PaymentStatus.PENDING.toString(),
                                        new Date(utilDate.getTime()), paymentDto.getPrice());

        paymentRepository.save(p);

        paymentDto.setId(p.getId());

        //        REWORK:
        paymentDto.setPaymentStatus(PaymentStatus.PENDING);
        paymentDto.setDate(p.getDate().toString());

        return paymentDto;
    }

    public List<PaymentDto> getAllPayments(){

        List<PaymentEntity> lpe = paymentRepository.findAll();
        List<PaymentDto> paymentDtos = new ArrayList<>();
        for (PaymentEntity pe: lpe) {
            PaymentDto temp = new PaymentDto();
            temp.setId(pe.getId());
            temp.setPaymentProvider(pe.getPaymentProvider());
            //            REWORK:
            temp.setPaymentStatus(PaymentStatus.PENDING);
            temp.setDate(pe.getDate().toString());
            temp.setPrice(pe.getPrice());

            paymentDtos.add(temp);
        }
        return paymentDtos;
    }
}
