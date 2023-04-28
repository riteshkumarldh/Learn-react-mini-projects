const AddressForm = () => {
  return (
    <>
      <div>
        <label htmlFor="nickname">How Should your mail be addressed</label>
        <input type="text" id="nickname" name="nickname" />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" />
      </div>
      <div>
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address" name="address" />
      </div>
      <div>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" name="postal" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option value="">India</option>
          <option value="">UK</option>
          <option value="">USA</option>
          <option value="">Canada</option>
          <option value="">Aus</option>
          <option value="">Srilanka</option>
        </select>
      </div>
      <div>
        <label htmlFor="labels">Labels</label>
        <select name="labels" id="labels">
          <option value="">Family</option>
          <option value="">Friend</option>
          <option value="">Business</option>
        </select>
      </div>
    </>
  );
};

export default AddressForm;
