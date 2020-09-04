package pe.codesign.rest.microservices.util;


public class MicroServicesException extends Exception {
    public MicroServicesException(String errorMessage) {
        super(errorMessage);
    }
}
