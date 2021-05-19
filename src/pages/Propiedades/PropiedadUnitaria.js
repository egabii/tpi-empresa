
import{ Carousel,Image,Container,Col,Row} from 'react-bootstrap';
import h1 from '../../assets/imgs/h1.jpg';
import h2 from '../../assets/imgs/h2.jpeg';
import h3 from '../../assets/imgs/h3.jpg';
import h4 from '../../assets/imgs/h4.jpg';
import h5 from '../../assets/imgs/h5.jpg';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Image upload modules
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import './estilo.css'


import React from 'react'


const PropiedadUnitaria = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 >Multimedia</h2>
                <section className='galery' >
                    <div style={{height:340 , width:580}}>
                             <Carousel indicators={true}  >
                                  <Carousel.Item>
                                      <Image  src={h1} style={{ height: 340, width: 580 }} fluid/>
                                  </Carousel.Item>
                                  <Carousel.Item>
                                      <Image src={h2} style={{ height: 340, width: 580 }}  fluid/>
                                  </Carousel.Item>
                                  <Carousel.Item>
                                      <Image src={h3} style={{ height: 340, width: 580 }} fluid />
                                  </Carousel.Item>
                                  <Carousel.Item>
                                      <Image src={h4} style={{ height: 340, width: 580 }}  fluid/>
                                  </Carousel.Item>
                                </Carousel>
                    </div>
                    <div className='addImg'>
                      <AppImagen/>
                    </div>      
                </section>
                <hr />
                <section style={{display:'flex',flexDirection:'column', fontSize:'18px'}}>
                <h2>Datos Propiedad</h2>
                        <label >Estado: <button style={{marginLeft: '150px'}}  class="btn btn-primary" type="submit">Editar estado</button></label>
                        <label>Precio:</label> 
                        <label>Codigo inmueble: </label>
                        <label>Tipo:</label>
                        <label>Ubicacion</label>
                        <label>Antiguedad:</label>
                        <label>Elementos:</label>
                        <label>Servicios Adheridos</label>
                        
                </section>
                <hr />
                   
                </Col>
            </Row>

        </Container>
    )
}

export default PropiedadUnitaria


class AppImagen extends React.Component {
  
  render(){
    //Uploaded url
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
    
    class PicturesWall extends React.Component {
      state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg'},
            {uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://corradi.eu/getattachment/99ea0746-497d-410e-a8cc-4c7dbf93394a/tiny-house-cosa-sono.jpg'},
         
        ],
      };
    
      handleCancel = () => this.setState({ previewVisible: false });
      //Image Preview
      handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
          previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });
    
      render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return (
          <>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </>
        );
      }
    }
    return (
    <div className="MainDiv">
      <div className="container">
          <PicturesWall />
      </div>
    </div>
      
    
  );
}
}
