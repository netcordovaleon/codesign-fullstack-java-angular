package pe.codesign.rest.microservices.services;

import org.springframework.stereotype.Service;
import pe.codesign.rest.microservices.dto.UserDTO;
import pe.codesign.rest.microservices.model.User;
import pe.codesign.rest.microservices.util.ObjectMapperUtil;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServicesImp implements UserServices {

    @PersistenceContext
    private EntityManager em;

    @Override
    @SuppressWarnings("unchecked")
    public UserDTO GetUserAccess(UserDTO user) {
        UserDTO userFound = null;
        StoredProcedureQuery findUserAccess = em.createNamedStoredProcedureQuery("usp_access");
        findUserAccess.setParameter("nomusu", user.getName());
        findUserAccess.setParameter("passusu", user.getPassword());
        List<Object> getResultFromBD = findUserAccess.getResultList();
        if(getResultFromBD.size()>0){
            userFound = ObjectMapperUtil.map(getResultFromBD.get(0), UserDTO.class);
        }
        return userFound;
    }
}
