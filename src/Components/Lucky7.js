import React from 'react'

let url = '';
let url1 = 'https://i0.wp.com/media0.giphy.com/media/UOvh7Fw9fo7KM/giphy.gif';
let url2 = 'https://media.tenor.com/JNcQBoyvPhUAAAAM/loser-lotto.gif';
let luckynumber = Math.floor(Math.random() * 10);

const Lucky7 = () => {

    // let showItem = false;
    // if (luckynumber == 7) {
    //     showItem = true;
    // }

    if (luckynumber === 7) {
        url = url1;
    }
    else {
        url = url2;
    }

    return (
        <div>
            Welcome to the App YOur Lucky Number is -{luckynumber}
            {/* {showItem && <img src={url} />} */}
            <img src={url} alt='Hello Img' />
        </div>
    )
}

export default Lucky7