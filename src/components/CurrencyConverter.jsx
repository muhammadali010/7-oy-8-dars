import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setFromCurrency, setToCurrency } from '../Redux/currencySlice';

function CurrencyConverter() {
    const dispatch = useDispatch();
    const { amount, fromCurrency, toCurrency, exchangeRate } = useSelector((state) => state.currency);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const convertedAmount = (amount * exchangeRate).toFixed(3);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg text-gray-800">
            <div className="flex justify-between items-center pb-4 border-b">
                <button className="text-white bg-blue-700 px-4 py-2 rounded-lg font-semibold focus:outline-none">Convert</button>
                <button className="text-gray-500 focus:outline-none">Send</button>
                <button className="text-gray-500 focus:outline-none">Charts</button>
                <button className="text-gray-500 focus:outline-none">Alerts</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="col-span-3">
                    <label className="block text-gray-700 text-lg font-semibold">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => dispatch(setAmount(e.target.value))}
                        className="w-full mt-1 p-4 text-xl border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                        placeholder="200.00"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">From</label>
                    <select
                        value={fromCurrency}
                        onChange={(e) => dispatch(setFromCurrency(e.target.value))}
                        className="w-full mt-1 p-4 text-lg border rounded-lg focus:ring focus:ring-blue-200 outline-none">
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="RUB">RUB - Russian Ruble</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                        <option value="SGD">SGD - Singapore Dollar</option>
                        <option value="KRW">KRW - South Korean Won</option>
                        <option value="MXN">MXN - Mexican Peso</option>
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full focus:outline-none">&#x21c4;</button>
                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-semibold">To</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => dispatch(setToCurrency(e.target.value))}
                        className="w-full mt-1 p-4 text-lg border rounded-lg focus:ring focus:ring-blue-200 outline-none">
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="RUB">RUB - Russian Ruble</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                        <option value="SGD">SGD - Singapore Dollar</option>
                        <option value="KRW">KRW - South Korean Won</option>
                        <option value="MXN">MXN - Mexican Peso</option>
                    </select>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-700">
                <p className="text-2xl font-semibold">{amount} {fromCurrency} =</p>
                <p className="text-4xl font-bold text-gray-800">{convertedAmount} {toCurrency}</p>
                <p className="mt-4 text-sm text-gray-500">
                    1 {fromCurrency} = {exchangeRate} {toCurrency} <br />
                    1 {toCurrency} = {(1 / exchangeRate).toFixed(6)} {fromCurrency}
                </p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none">Track currency</button>
                <button onClick={openModal} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none">View transfer quote</button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Transfer Quote</h2>
                        <p className="mt-4 text-lg">
                            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"> Close </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;
