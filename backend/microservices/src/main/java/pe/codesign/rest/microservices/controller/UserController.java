package pe.codesign.rest.microservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.codesign.rest.microservices.dto.UserDTO;
import pe.codesign.rest.microservices.services.UserServices;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/v1")
public class UserController {

    @Autowired
    private UserServices _userServices;

    @PostMapping("/login")
    public UserDTO GetAccess(@RequestBody UserDTO user){
        return this._userServices.GetUserAccess(user);
    }
}
