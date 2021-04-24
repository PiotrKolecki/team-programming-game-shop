package agh.fis.common.util;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;
import org.slf4j.LoggerFactory;

public class LogKeeper extends ListAppender<ILoggingEvent> implements AutoCloseable {
    private final Logger logger;

    public LogKeeper(Class<?> clazz) {
        logger = (Logger) LoggerFactory.getLogger(clazz);
        logger.addAppender(this);
        start();
    }

    public boolean containsInfo(String msg) {
        return containsMessage(msg, Level.INFO);
    }

    public boolean containsDebug(String msg) {
        return containsMessage(msg, Level.DEBUG);
    }

    public boolean containsError(String msg) {
        return containsMessage(msg, Level.ERROR);
    }

    private boolean containsMessage(String msg, Level level) {
        return list.stream().anyMatch(event -> event.getFormattedMessage().contains(msg) && event.getLevel().equals(level));
    }

    @Override
    public void close() {
        list.clear();
        logger.detachAndStopAllAppenders();
    }
}