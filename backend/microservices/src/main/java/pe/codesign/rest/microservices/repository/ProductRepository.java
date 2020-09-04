package pe.codesign.rest.microservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.codesign.rest.microservices.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
