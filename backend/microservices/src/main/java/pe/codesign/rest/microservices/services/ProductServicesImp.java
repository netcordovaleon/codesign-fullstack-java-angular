package pe.codesign.rest.microservices.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.codesign.rest.microservices.dto.OperatorResponseDTO;
import pe.codesign.rest.microservices.dto.ProductDTO;
import pe.codesign.rest.microservices.model.Product;
import pe.codesign.rest.microservices.repository.ProductRepository;
import pe.codesign.rest.microservices.util.ConstantServices;
import pe.codesign.rest.microservices.util.MicroServicesException;
import pe.codesign.rest.microservices.util.ObjectMapperUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServicesImp implements ProductServices {

    @Autowired
    private ProductRepository _productRepository;

    @Override
    public List<ProductDTO> GetAll() {
        List<Product> products = this._productRepository.findAll();
        List<ProductDTO> productsDTO = ObjectMapperUtil.mapAll(products, ProductDTO.class);
        return productsDTO;
    }

    @Override
    public OperatorResponseDTO Save(ProductDTO product) {
        Product entity = ObjectMapperUtil.map(product, Product.class);
        _productRepository.save(entity);
        return new OperatorResponseDTO(ConstantServices.SUCCESS_MESSAGE, entity);
    }

    @Override
    public OperatorResponseDTO Update(ProductDTO product) {
        Product entity = ObjectMapperUtil.map(product, Product.class);
        _productRepository.save(entity);
        return new OperatorResponseDTO(ConstantServices.SUCCESS_MESSAGE, entity);
    }

    @Override
    public ProductDTO GetById(int id) throws MicroServicesException {
       Optional<Product> product = _productRepository.findById(id);
       if (!product.isPresent())
           throw new MicroServicesException(ConstantServices.NO_DATA_FOUND);
       ProductDTO productDTO = ObjectMapperUtil.map(product.get(), ProductDTO.class);
       return productDTO;
    }

    @Override
    public OperatorResponseDTO Delete(int id) throws MicroServicesException {
        Optional<Product> product = _productRepository.findById(id);
        if (!product.isPresent())
            throw new MicroServicesException(ConstantServices.NO_DATA_FOUND);
        _productRepository.delete(product.get());
        return new OperatorResponseDTO(ConstantServices.SUCCESS_MESSAGE, product);
    }
}
