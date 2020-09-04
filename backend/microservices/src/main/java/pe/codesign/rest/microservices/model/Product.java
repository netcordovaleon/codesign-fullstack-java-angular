package pe.codesign.rest.microservices.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tm_products")
@Data
public class Product {
    @Id
    @Column(name = "codprod")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int code;
    @Column(name = "nomprod")
    private String name;
    @Column(name = "descprod")
    private String description;
    @Column(name = "unidmedprod")
    private String unitOfMeasure;
    @Column(name = "stockprod")
    private int stock;
    @Column(name = "preunitprod")
    private double unitPrice;
    @Column(name = "fecreg")
    private Date registerDate;
    @Column(name = "estadoreg")
    private String status;
}
