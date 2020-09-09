package pe.codesign.rest.microservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.codesign.rest.microservices.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Procedure(name = "usp_access")
    User finByNomusuAndPassusu(@Param("nomusu") String nomusu, @Param("passusu") String passusu);
}
