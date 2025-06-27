import { useState } from 'react';
import { Button } from '../../ui/button';

const PaymentForm = ({ courseId, amount, onSuccess, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful payment
      onSuccess({
        transactionId: 'txn_' + Date.now(),
        amount,
        method: paymentMethod,
        status: 'completed'
      });
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setProcessing(false);
    }
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s+/g, '').replace(/[^0-9]/gi, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-2xl font-bold text-green-600">${amount}</span>
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Payment Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`p-3 border rounded-lg text-center ${
              paymentMethod === 'card' 
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            💳 Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`p-3 border rounded-lg text-center ${
              paymentMethod === 'paypal' 
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            🅿️ PayPal
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('stripe')}
            className={`p-3 border rounded-lg text-center ${
              paymentMethod === 'stripe' 
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            ⚡ Stripe
          </button>
        </div>
      </div>

      {/* Credit Card Form */}
      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                placeholder="123"
                maxLength={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={formData.nameOnCard}
              onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Billing Address</h3>
            
            <input
              type="text"
              value={formData.billingAddress.street}
              onChange={(e) => handleInputChange('billingAddress.street', e.target.value)}
              placeholder="Street Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={formData.billingAddress.city}
                onChange={(e) => handleInputChange('billingAddress.city', e.target.value)}
                placeholder="City"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <input
                type="text"
                value={formData.billingAddress.state}
                onChange={(e) => handleInputChange('billingAddress.state', e.target.value)}
                placeholder="State"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={formData.billingAddress.zipCode}
                onChange={(e) => handleInputChange('billingAddress.zipCode', e.target.value)}
                placeholder="ZIP Code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <select
                value={formData.billingAddress.country}
                onChange={(e) => handleInputChange('billingAddress.country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
              disabled={processing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={processing}
            >
              {processing ? 'Processing...' : `Pay $${amount}`}
            </Button>
          </div>
        </form>
      )}

      {/* Other Payment Methods */}
      {paymentMethod === 'paypal' && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🅿️</div>
          <p className="text-gray-600 mb-6">You will be redirected to PayPal to complete your payment.</p>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => console.log('Redirect to PayPal')}>
              Continue with PayPal
            </Button>
          </div>
        </div>
      )}

      {paymentMethod === 'stripe' && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">⚡</div>
          <p className="text-gray-600 mb-6">Secure payment powered by Stripe.</p>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => console.log('Process with Stripe')}>
              Pay with Stripe
            </Button>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="mt-6 p-3 bg-green-50 rounded-lg">
        <div className="flex items-center">
          <div className="text-green-500 mr-2">🔒</div>
          <p className="text-sm text-green-700">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
