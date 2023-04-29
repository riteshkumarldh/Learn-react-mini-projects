const AddressForm = ({ setFormData, formData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <>
      <div>
        <label htmlFor="nickname">Nick Name</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Nick Name"
          onChange={handleChange}
          value={formData.nickname}
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div>
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
      <div>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="number"
          id="postal"
          name="postal"
          placeholder="postal code"
          onChange={handleChange}
          value={formData.postal}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="city"
          onChange={handleChange}
          value={formData.city}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          onChange={handleChange}
          value={formData.country}
        >
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Aus">Aus</option>
          <option value="Srilanka">Srilanka</option>
        </select>
      </div>
      <div>
        <label htmlFor="labels">Labels</label>
        <select
          name="labels"
          id="labels"
          onChange={handleChange}
          value={formData.labels}
        >
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Business">Business</option>
        </select>
      </div>
    </>
  );
};

export default AddressForm;
