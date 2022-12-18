import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount)

    const resetValue = () =>{
        setIncrementAmount(0)
        dispatch(reset())
    }

    useEffect(()=>{         
        console.log(counter);
    },[])
  return (
    <>
      <section>
        <p>{counter}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>{
            if(counter > 0){
                dispatch(decrement())
            }
        }}>-</button>
        <input type="text"
        value={incrementAmount}
        onChange={(e)=>{setIncrementAmount(e.target.value)}} />
        <div>
            <button onClick={()=>{dispatch(incrementByAmount(addValue))}}>Add Amount</button>
            <button onClick={resetValue}>Reset All</button>
        </div>
      </section>
    </>
  )
}

export default Counter
