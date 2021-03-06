import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Electric test',

        totalSpace: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: '',
     
        totalSpace: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Electric Service',
       
        totalSpace: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Plumbing',
      
        totalSpace: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Fridge Service',
  
        totalSpace: 10
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Fan Service',
 
        totalSpace: 10
    }
]


const BookOrder = ({date}) => {
    return (
        <section>
            <h1 className="text-center text-brand mb-5">Take Schedule on {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}/>)
                }
            </div>
        </section>
    );
};

export default BookOrder;