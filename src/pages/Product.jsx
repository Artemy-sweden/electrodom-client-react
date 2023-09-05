import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://63fe15b61626c165a0a7034c.mockapi.io/items/${id}`)
      .then((res) => res.json())
      .then((json) => setProductData(json))
      .catch((error) => console.warn(error))
      .finally(console.log("success"));
  }, []);
  return (
    <>
      {console.log(productData)}
      <div className="product">
        <div className="product__photos">
          <div className="main__photo">
            <img src="../assets/img/люстра 2.png" alt="#" />
          </div>

          <img src="../assets/img/люстра 2.png" alt="#" />
          <img src="../assets/img/люстра 2.png" alt="#" />
          <img src="../assets/img/люстра 2.png" alt="#" />
          <img src="../assets/img/люстра 2.png" alt="#" />
        </div>
        <div className="product__content">
          <h4>{productData.title}</h4>
          <div className="product__rating">***** 5,0 (16)</div>
          <div className="product__price">{productData.price}</div>
          <div className="product__short">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              iste vel magni et aperiam. Blanditiis dicta voluptates temporibus
              quas, laudantium quisquam deserunt voluptatibus, cumque eos,
              voluptas ex voluptate nobis cupiditate!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              iste vel magni et aperiam. Blanditiis dicta voluptates temporibus
            </p>
          </div>
          <div className="product__buttons">
            <button>Buy</button>
            <button>Purhcase</button>
          </div>
        </div>
      </div>
      <div className="product__section">
        <h4>Opisanie</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          temporibus dicta ex consequuntur quis voluptatibus a fugit
          necessitatibus porro sit laboriosam inventore ipsa, sint error
          eligendi adipisci nobis, minus veritatis! Quod fuga, repudiandae dolor
          iure quidem molestias at pariatur. Vero molestiae provident laboriosam
          quasi, est autem reprehenderit, perferendis neque eligendi debitis
          quisquam libero. Deserunt tempora repellendus cupiditate aliquid
          commodi magnam.
        </p>
      </div>
      <div className="product__section">
        <h4>Haracteristici</h4>
        <ul>
          <li>
            <span>High</span>
            <span>25</span>
          </li>
          <li>
            <span>Lenth</span>
            <span>333</span>
          </li>
          <li>
            <span>Lenth</span>
            <span>333</span>
          </li>
        </ul>
      </div>
      <div className="product__section">
        <h4>Comments</h4>
        <div className="comments__container">
          <div className="comment">
            <div className="user">
              <div className="avatar">P</div>
              <div className="data">
                <div className="name">Petrikov, 21.08.2023</div>
                <div className="rating">****</div>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              soluta quo voluptatibus praesentium numquam! Dignissimos suscipit
              earum, sunt a optio maiores cum autem! Illum, dolor alias iure
              velit et quidem? Exercitationem, facere culpa ea, ab possimus odit
              alias quam maxime obcaecati consequatur rem ipsum voluptatibus
              veritatis ullam perspiciatis. Eveniet incidunt quo temporibus fuga
              voluptate. Accusantium quo suscipit veritatis quam itaque.
              Suscipit ab esse dolores eligendi velit quia ducimus, qui
              perspiciatis! Est, nihil doloribus porro hic ipsa corporis atque
              voluptatem asperiores eos consectetur animi. Officiis, officia
              iste nam quam placeat earum! Delectus itaque molestias quasi
              excepturi doloribus suscipit nihil incidunt. Minima odit obcaecati
              numquam enim excepturi illo consequatur. Nobis atque voluptatum
              sapiente unde. Deserunt reiciendis animi neque explicabo. Aliquam,
              fuga a! Recusandae porro veniam totam iste accusantium labore
              tempore vel illo soluta laudantium consequatur, dignissimos
              quisquam eius doloribus animi, minima reprehenderit laboriosam
              voluptatum. A quibusdam voluptatibus cupiditate enim nam molestiae
              atque.
            </div>
            <div className="images">
              <img src="../assets/img/люстра 2.png" alt="#" />
              <img src="../assets/img/люстра 2.png" alt="#" />
              <img src="../assets/img/люстра 2.png" alt="#" />
            </div>
          </div>
          <div className="comment">
            <div className="user">
              <div className="avatar">P</div>
              <div className="data">
                <div className="name">Petrikov, 21.08.2023</div>
                <div className="rating">****</div>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              soluta quo voluptatibus praesentium numquam! Dignissimos suscipit
              earum, sunt a optio maiores cum autem! Illum, dolor alias iure
              velit et quidem? Exercitationem, facere culpa ea, ab possimus odit
              alias quam maxime obcaecati consequatur rem ipsum voluptatibus
              veritatis ullam perspiciatis. Eveniet incidunt quo temporibus fuga
              voluptate. Accusantium quo suscipit veritatis quam itaque.
              Suscipit ab esse dolores eligendi velit quia ducimus, qui
              perspiciatis! Est, nihil doloribus porro hic ipsa corporis atque
              voluptatem asperiores eos consectetur animi. Officiis, officia
              iste nam quam placeat earum! Delectus itaque molestias quasi
              excepturi doloribus suscipit nihil incidunt. Minima odit obcaecati
              numquam enim excepturi illo consequatur. Nobis atque voluptatum
              sapiente unde. Deserunt reiciendis animi neque explicabo. Aliquam,
              fuga a! Recusandae porro veniam totam iste accusantium labore
              tempore vel illo soluta laudantium consequatur, dignissimos
              quisquam eius doloribus animi, minima reprehenderit laboriosam
              voluptatum. A quibusdam voluptatibus cupiditate enim nam molestiae
              atque.
            </div>
            <div className="images">
              <img src="../assets/img/люстра 2.png" alt="#" />
              <img src="../assets/img/люстра 2.png" alt="#" />
              <img src="../assets/img/люстра 2.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
