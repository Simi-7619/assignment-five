const seats = document.getElementsByClassName('seat');
for(const seat of seats){
    seat.addEventListener('click', function(){
        let totalCost = stringValue('totalCost');
        


            const seatArea = document.getElementById('selected-seat')
        
            let setSection = document.createElement('div');
                setSection.classList.add('flex')
                setSection.classList.add('justify-between')
    
            let chair = document.createElement('p');
            chair.innerText = seat.innerText;
            setSection.appendChild(chair);
    
            let seatClass = document.createElement('p');
            seatClass.innerText = 'Echonomy';
            setSection.appendChild(seatClass);
    
    
            let seatPrice = document.createElement('p');
            seatPrice.innerText = 550;
            let totalSeats = stringValue('total-seat');
            if(totalSeats +1 <= 4){

                setSection.appendChild(seatPrice);
        
                seatArea.appendChild(setSection);      
            }


        // let totalCost = stringValue('totalCost');

        if(totalCost <= 1650){

            let sum = document.getElementById('totalCost').innerText = totalCost + parseInt(seatPrice.innerText) ;
            let grandTotal = stringValue('grand-total');
            document.getElementById('grand-total').innerText = sum;
        }

        let seatleft = stringValue('seat-left');
        if(seatleft > 28){

            document.getElementById('seat-left').innerText = seatleft - 1;
        }


        let totalSeat = stringValue('total-seat');
        if(totalSeat + 1 > 4){
            alert('You can buy maximum 4 seats');
            return;
        }
        document.getElementById('total-seat').innerText = totalSeat + 1;
        seat.setAttribute("disabled", false)
        seat.style.backgroundColor ='#22C55E'
        seat.style.color = 'white'

        let totalS = stringValue('total-seat');
        if(totalS === 4){
            let applyBtn = document.getElementById('apply');
            applyBtn.disabled = false;
        }
        const numberInputValue = document.getElementById('number');
        numberInputValue.addEventListener('input', function () {
            const submitButton = document.getElementById('next');
            let seatCount  = stringValue('total-seat')

            if (seatCount > 0 && numberInputValue.value.length > 10) {
               submitButton.disabled = false;
            } else {
               submitButton.disabled = true;
            }
         });
    

    })
}

    // coupon apply
    let applyButton = document.getElementById('apply')
    applyButton.addEventListener('click',couponFinder)

    function couponFinder(number){
        let inputValue =document.getElementById('coupon').value;
        let couponOne =  document.getElementById('couponOne').innerText;
        let couponTwo= document.getElementById('couponTwo').innerText;
        
        if(inputValue === couponOne){
            document.getElementById('applyAndInput').classList.add('hidden')
            document.getElementById('grand-total').innerText = '1870';

        }else if(inputValue === couponTwo){
            document.getElementById('applyAndInput').classList.add('hidden')
            document.getElementById('grand-total').innerText = '1760';
        }else{
          alert("Sorry! Your coupon is invalid")
        }
    }



    // get number value
    function stringValue(id){
    let element = document.getElementById(id).innerText;
        stringElement = parseInt(element);
        return stringElement;
}