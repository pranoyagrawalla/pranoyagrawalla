import React, { useContext, useEffect, useState } from "react";
import "./CartProduct.css";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarts, getCarts } from "../../Redux/cart/action.cart";
import { CityContext } from "../../Context/CityContext";

export const Cart = () => {
  const { city } = useContext(CityContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [verify, setVerify] = useState(false);
  const [address, setAddress] = useState("");
  const [flat, setFlat] = useState("");
  const data = useSelector((store) => store.dataCart.carts);
  const token = localStorage.getItem("token");

  console.log(data);
  // const a_verify = localStorage.getItem("a_verifyid");

  const deletehandler = (id) => {
    dispatch(deleteCarts(id));
  };


  // const gotostripe = () => {
  //   <a href="https://buy.stripe.com/test_bIY03Ucx1gCh4j6000"></a>
  //   navigate("/cart/payment");
  // }
  function paymenthandler () {
    window.open("https://buy.stripe.com/test_bIY03Ucx1gCh4j6000");
  }
// const paymenthandler = () => {
//     if (address === "" && flat === "") {
//       toast({
//         title: "Please fill all the fields",
//         description: "Provide a valid address",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     } else if (!token) {
//       toast({
//         title: "Please Login",
//         description: "Please Login first to Checkout",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//       navigate(`/${city}/login`);
//     } else if (data.length === 0) {
//       toast({
//         title: "No Item",
//         description: "No Item in the Cart, Please add the Item in the cart",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       navigate(`/${city}/Furniture`);
//     } else {
//       toast({
//         title: "Address added successfully",
//         description: "Thank You Address added",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
//       });
//       navigate("/cart/payment");
//     }
//   };

  const pattern = /^\d{10}$/;
  const validateMobileNumber = () => {
    if (!pattern.test(value)) {
      toast({
        title: "Please Enter Your Mobile Number",
        description: "Please Enter a Valid Mobile Number",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (!token) {
      toast({
        title: "Please Login",
        description: `Please Login to Verify the Number, Thank You`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      navigate(`/${city}/login`);
    } else {
      toast({
        title: "Number verify successfully",
        description: "Please click on Add New Address",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setVerify(true);
      localStorage.setItem("a_verifyid", value);
    }
  };

  const openAddress = () => {
    if (!pattern.test(value)) {
      toast({
        title: "Please Enter Your Mobile Number",
        description: "Please Enter a Valid Mobile Number",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (verify === false) {
      toast({
        title: "Please Verify Your Mobile Number",
        description: "Please Enter a Valid Mobile Number and Verify",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getCarts()).then(() => setLoading(false));
  }, [dispatch]);

  //   const handleVerify = () => {};

  let sum = 0;
  data.map((el) => {
    return (sum += el.deposit);
  });

  if (loading) {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Loading...
        </h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="flexDiv">
            <div className="main">
              <h3>Order Summary</h3>
              <div className="CartPAge">
                <div className="paymentDiv">
                  <div>
                    <h5 className="PayableNow">Payable Now</h5>
                    <div className="spaceBetweeen">
                      <p>Refundable Deposit</p>
                      <p>{`₹ ${sum}`}</p>
                    </div>
                    <div className="spaceBetweeen">
                      <p>Installation Charges</p>
                      <p>₹1</p>
                    </div>
                    <div className="spaceBetweeen">
                      <p>Delivery Charges</p>
                      <p>₹49</p>
                    </div>
                    <hr></hr>
                    <div className="spaceBetweeen">
                      <p>Total Payout</p>
                      <p>{`₹ ${sum + 49 + 1}`}</p>
                    </div>
                  </div>
                </div>
                <div className="paymentDiv">
                  <div>
                    <h5 className="PayableNow">Payable Now</h5>
                    <div className="spaceBetweeen">
                      <p>Product Rent</p>
                      <p>{`₹${Math.floor(sum / 12)}/mo`}</p>
                    </div>
                    <div className="spaceBetweeen">
                      <p>GST</p>
                      <p>₹32/mo</p>
                    </div>
                    <hr></hr>
                    <div className="spaceBetweeen">
                      <p>Total Monthly</p>
                      <p>{`₹${Math.floor(sum / 12) + 32}/mo`}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="Big_btn_div" onClick={handleProcced}>
                        <p>₹1167
                            <br></br>
                            Payable Now</p>
                        <p>Procced</p>
                    </div> */}
              <br></br>
              <br></br>
              <hr></hr>
              {/* {a_verify ? (
                <div>
                  <button className="__verify__Addressed__">Checkout</button>
                </div>
              ) : ( */}
              {/* <> */}
              <div className="123">
                {/* <div className="verificationFlex">
                  <h3>Verify Your Phone Number</h3>
                  <div className="numberVerify">
                    <input
                      placeholder="Entre your phone number *"
                      className="numberVerifyInput"
                      nmae="mobileNumber"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                    />
                    <button
                      className="numberVerifyBtn"
                      onClick={validateMobileNumber}
                    >
                      Go
                    </button>
                  </div>
                </div> */}
              
              </div>
              <div className="verification">
                       <Button colorScheme="blue" onClick={paymenthandler}>
                          Complete Payment
                        </Button>
                
                <div>
                  <img
                    src="https://www.rentomojo.com/public/images/radical-cart/address__banner.svg"
                    alt="cartImg"
                  />
                </div>
              </div>
              
            </div>
            <div className="productsDiv">
              <div className="coupon">
                <input
                  className="couponInput"
                  placeholder="Have a Coupon Code...!"
                />
                <button className="couponBtn">Apply</button>
              </div>
              <div>
                <p className="only"></p>
                <div className="ImportingDiv">
                  {data.map((el, index) => (
                    <div key={index}>
                      {/* <p>{el.title}</p>
                      <button onClick={()=>deletehandler(el.id)}>delete</button>
                      </div>
                      <div> */}
                      <div className="fetchDiv">
                        <div className="imgDiv">
                          <img src={el.image} alt="PRoduct Img" />
                        </div>
                        <div className="infoDiv">
                          <div className="namebtn">
                            <p> {el.title} </p>
                            <img
                              src="https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg"
                              alt="delete"
                              onClick={() => deletehandler(el.id)}
                            />
                          </div>
                          <br></br>
                          <div className="price">
                            <p>
                              Installation <br></br> ₹1{" "}
                            </p>
                            <p>
                              Rent <br></br> ₹{el.rental}
                            </p>
                            <p>
                              Deposit <br></br> ₹{el.deposit}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="Selector">
                        <select className="selectTag">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <select className="selectTag">
                          <option>1 Months</option>
                          <option>2 Months</option>
                          <option>3 Months</option>
                        </select>
                      </div>
                    </div>

                    // <SingleProduct
                    //   key={el.id}
                    //   prdctImg={el.image}
                    //   Name={el.title}
                    //   price={el.rental}
                    //   deposite={el.deposit}
                    //   id={el.id}
                    // />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
