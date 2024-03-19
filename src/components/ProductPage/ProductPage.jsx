import buttons from "../../assets/buttons.webp"
import cream from "../../assets/cream.jpeg"
import product from "../../assets/product.jpeg"

export default function ProductPage() {
  const description = {
    buttons: "buttons",
    cream: "cream",
    product: "product",
  }
  return (
    <div>
      <h1>Product page </h1>
      <img src={buttons} alt={description.buttons} width={250} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corrupti soluta incidunt
        quisquam facere, quis odio velit enim dolorem voluptas? Voluptatem rem soluta quos velit
        dolorem natus laborum quibusdam iure, esse modi veniam quidem neque?
      </p>
      <img src={cream} alt={description.cream} width={250} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corrupti soluta incidunt
        quisquam facere, quis odio velit enim dolorem voluptas? Voluptatem rem soluta quos velit
        dolorem natus laborum quibusdam iure, esse modi veniam quidem neque?
      </p>
      <img src={product} alt={description.product} width={250} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corrupti soluta incidunt
        quisquam facere, quis odio velit enim dolorem voluptas? Voluptatem rem soluta quos velit
        dolorem natus laborum quibusdam iure, esse modi veniam quidem neque?
      </p>
    </div>
  )
}
