import React from "react";

const Cards = () => {
return(

    <div className="card mb-5 ">
        <svg class="bd-placeholder-img card-img-top img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="25%" y="40%" fill="#dee2e6" dy="1em">500 x 325</text>
        </svg>
        <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, tenetur, accusamus eos, rerum unde eum libero quibusdam beatae consectetur amet nostrum obcaecati animi esse temporibus doloremque assumenda. Quos, fuga culpa!</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
    
    
);
}
export default Cards;