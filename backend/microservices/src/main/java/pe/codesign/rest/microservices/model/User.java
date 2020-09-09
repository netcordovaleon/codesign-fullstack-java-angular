package pe.codesign.rest.microservices.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SqlResultSetMapping(
        name = "UserMapping",
        entities = @EntityResult(
                entityClass = User.class,
                fields = {
                        @FieldResult(name = "code", column = "codusu"),
                        @FieldResult(name = "name", column = "nomusu")
                })
)
@NamedStoredProcedureQueries({
        @NamedStoredProcedureQuery
                (
                    name = "usp_access",
                    procedureName = "usp_access",
                    parameters = {
                            @StoredProcedureParameter(mode=ParameterMode.IN, name="nomusu", type=String.class),
                            @StoredProcedureParameter(mode=ParameterMode.IN, name="passusu", type=String.class)
                    },
                    resultClasses = User.class
                )
})
public class User implements Serializable {
    private static final long serialVersionUID = -4989538654767620316L;
    @Id
    @Column(name = "codusu")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int code;
    @Column(name = "nomusu")
    private String name;
}
