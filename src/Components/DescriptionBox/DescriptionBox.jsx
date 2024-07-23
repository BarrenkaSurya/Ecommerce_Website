import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Revies (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerse website is an online platform that facilitates the buying and selling of products or services
            over the internet. it serves asa virtual marketplace here bussiness and individuals can shocase theirr products, interact
            with customers, and conduct transactions without the need for a physical presence E-commerse websites have gained
            immense popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerse ebsites typically display products or services along with detailed descriptions, images prices and any available
            variation(e.g,sizes,colors) Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
