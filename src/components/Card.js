import React from 'react';

const Card = ({id, name, email}) => {

    return (
        <>
        <div className='bg-navy dib br3 pa3 ma2 grow bw2 shadow-5 tc'> 
            <img src={`https://robohash.org/${id}?set=set3`} alt='' />
            <div className='light-gray'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    );
}

export default Card;













// const getRand = () => {
//     const len = [0,1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//     return Math.floor(Math.random() * len.length) + 10
// }


    // const rand = getRand();