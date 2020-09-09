package pe.codesign.rest.microservices.services;

import pe.codesign.rest.microservices.dto.UserDTO;
import pe.codesign.rest.microservices.model.User;

public interface UserServices {
    UserDTO GetUserAccess(UserDTO user);
}
