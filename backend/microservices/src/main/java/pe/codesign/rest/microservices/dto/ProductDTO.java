package pe.codesign.rest.microservices.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO implements Serializable {
    private static final long serialVersionUID = 1341957781169052348L;
    private int code;
    private String name;
    private String description;
    private String unitOfMeasure;
    private int stock;
    private double unitPrice;
    private Date registerDate;
    private String status;
}
