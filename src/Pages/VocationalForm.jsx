import React, { useState } from 'react';
import styles from './VocationalForm.module.css';

const VocationalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Vocational Form</h2>
      <form onSubmit={handleSubmit} className={styles.customForm}>
        
        <label>Reg No:<input type="text" name="regno" onChange={handleChange} className={styles.formInput}/></label>
        <label>Referred by:<input type="text" name="referredby" value={formData.reffBy} onChange={handleChange} className={styles.formInput}/></label>
        <label>Date of admission:<input type="date" name="doa" value={formData.doa} onChange={handleChange} className={styles.formInput}/></label>
        <label>Date of completion:<input type="date" name="doc" value={formData.doc} onChange={handleChange} className={styles.formInput}/></label>
        <h3>I. Personal details</h3>
        <label>Full Name:<input type="text" name="fullname" value={formData.fullName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Present address<input type="text" name="presentaddress" value={formData.email} onChange={handleChange} className={styles.formInput}/></label>
        <label>Permanent address:<input type="text" name="permanentaddress" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Phone:<input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        
        <h3>II. Personal details of the client</h3>
        <label>Aadhar card number:<input type="number" name="aadharcardno" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Date of birth:<input type="date" name="dob" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Age:<input type="number" name="age" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Single/Married/Divorced:<input type="text" name="relstatus" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Religion/Caste:<input type="text" name="religion" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Nature of disability:<input type="text" name="natureofdisability" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Reason for referral:<input type="text" name="reasonref" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>History of present problem:<input type="text" name="problemhistory" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Any external aid/device currently used:<input type="text" name="aidinfo" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label> Any other illness/medication:<input type="text" name="medicationinfo" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Substance/Drug misuse history:<input type="text" name="druginfo" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Vocational rehabilitation centre Reg. No:<input type="text" name="rehabno" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Special employee exchange no:<input type="text" name="empexno" value={formData.firstName} onChange={handleChange} className={styles.formInput}/>  </label>

        <h3>III. Family history</h3>
        <h4>Father's details</h4>
        <label>Name:<input type="text" name="name" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Age:<input type="text" name="age" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Education:<input type="text" name="education" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Occupation:<input type="text" name="occupation" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Income:<input type="text" name="income" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <h4>Mother's details</h4>
        <label>Name:<input type="text" name="name" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Age:<input type="text" name="age" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Education:<input type="text" name="education" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Occupation:<input type="text" name="occupation" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Income:<input type="text" name="income" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>

        <h3>Iv. Educational details</h3>
        <label>Examination:<input type="text" name="examination" value={formData.fullName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Year of passing<input type="text" name="yop" value={formData.email} onChange={handleChange} className={styles.formInput}/></label>
        <label>Marks obtained:<input type="text" name="markobt" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>No of attempts:<input type="number" name="noa" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <label>Remarks:<input type="text" name="remarks" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <h3>Name of the School/College attended till date</h3>
        <label>Name<input type="text" name="name" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <label>Year:<input type="text" name="year" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <button>Add more</button>

        <h3>v. Previous training</h3>
        <label>Name of training centre:<input type="text" name="name" value={formData.fullName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Type of training received:<input type="text" name="typeoftraining" value={formData.email} onChange={handleChange} className={styles.formInput}/></label>
        <label>Duration & Year:<input type="text" name="duration" value={formData.firstName} onChange={handleChange} className={styles.formInput}/></label>
        <label>Students stipend received:<input type="number" name="stipend" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <label>Remarks:<input type="text" name="remarks" value={formData.phone} onChange={handleChange} className={styles.formInput}/></label>
        <button>Add more</button>

        <h3>Comments on evidence of educational and training problem</h3>
        <label><input type='text' name='comments' value={formData.fullName} onChange={handleChange} className={styles.formInput}/></label>
        <h3>Any other</h3>
        <label><input type='text' name='anyother' value={formData.fullName} onChange={handleChange} className={styles.formInput}/></label>
        
{/* 
        <label htmlFor="imageUpload">Upload documents:</label>
        <input type="file" id="imageUpload" accept="image/*"   onChange={handleImageChange}/>
        <input type="file" id="imageUpload" accept="image/*"   onChange={handleImageChange}/> */}

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default VocationalForm;
