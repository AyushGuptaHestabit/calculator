import React, { useState, useEffect } from 'react'

function Calculator() {
    const [result, setResult] = useState("Null");
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState(null);

    useEffect(() => {
        if (firstNumber && secondNumber && operation) {
            let results = firstNumber + operation + secondNumber;
            setResult(eval(results));
        }
    }, [operation])

    const resultForm = () => {
        setResult('Null');
        setFirstNumber('');
        setSecondNumber('');
        setOperation(null);
    }

    return (
        <div className='col-7 mx-auto border border-white rounded'>
            <div className='form-group'>
                <label htmlFor='first'>First Number</label>
                <input type='number' value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} id='first' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='second'>Second Number</label>
                <input type='number' value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} id='second' className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='operation'>Operation</label>
                <select id='operation' onChange={(e) => setOperation(e.target.value)} className='form-control'>
                    <option value=''>Select an Operation</option>
                    <option value='+'>Plus(+)</option>
                    <option value='-'>Minus(-)</option>
                    <option value='*'>MultiPlication(*)</option>
                    <option value='/'>Division(/)</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='result'>Result</label>
                <div className='bg-light text-dark'>
                    <p>{result}</p>
                </div>
            </div>
            <div className='form-group'>
                <button className='btn btn-sm btn-secondary my-3' onClick={() => resultForm()}>Reset</button>
            </div>
        </div>
    )
}

export default Calculator