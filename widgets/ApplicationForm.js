import React, { useState } from 'react';
import styles from '../styles/ApplicationForm.module.css'
import axios from 'axios';

const ApplicationForm = (props) => {

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [experience, setExperience] = useState("No");
  const [country, setCountry] = useState('');
  const [qualification, setQualification] = useState('');
  const [native, setNative] = useState("Native");
  const [agreement, setAgreement] = useState(false);
  const [cv, setCv] = useState('');
  const [videoCv, setVideoCv] = useState('');
  const [response, setResponse] = useState('');
  const [uploadCVRes, setUploadCVRes] = useState('');
  const [uploadVCVRes, setUploadVCVRes] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const url = 'api/v1/application/fileupload';
    const formData = new FormData();
    formData.append('file', cv);
    await axios.post(url, formData)

    const formData2 = new FormData();
    formData2.append('file', videoCv);
    await axios.post(url, formData2)

    const {data} = await axios.post('api/v1/application/submit', {
      firstName, middleName, lastName, email, phoneNo, dateOfBirth, addressline1, addressline2, experience, country, qualification, native, agreement, cv: cv.name, videoCv: videoCv.name
    })
    data.success && setResponse('Thank you for submitting your application with TEFL Jobs in Asia! We will let you know about your application status shortly.')
  }

  const onChangeValue = (e) => {
    setExperience(e.target.value)
  }

  const onChangeNative = (e) => {
    setNative(e.target.value)
  }

  const uploadCV = (e) => {

    const file = e.target.files[0]

    const ext = file.name.split('.').pop()

    if(['pdf', 'doc', 'jpg', 'png', 'docx'].includes(ext)){
      setCv(e.target.files[0])
      setUploadCVRes('')
    }else{
      setUploadCVRes('Uploaded file is incorrect. Please select a file with .doc, .pdf, .docx, .png or .jpg format.')
    }
  }

  const uploadVideoCV = (e) => {
    const file = e.target.files[0]

    const ext = file.name.split('.').pop()

    if(['mp4'].includes(ext)){
      setVideoCv(e.target.files[0])
      setUploadVCVRes('')
    }else{
      setUploadVCVRes('Uploaded file is incorrect. Please select a file with .mp4 format.')
    }
  }

  return (
    <form className={styles.application_form} onSubmit={handleSubmit}>
        <h2 id={styles["application_form_title"]}>Application Form</h2>
      <div className={styles.application_form_body}>
        <div className={styles.application_form_body_basics}>
          <label>First Name
            <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>Middle Name
            <input type="text" name="middle_name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          </label>
          <label>Last Name
            <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label>Date of Birth
            <input type="date" name="dob" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          </label>
          <label>Phone No.
            <input type="phone" name="phone" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
          </label>
          <label>Email ID
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>Current Address Line 1
            <input type="text" name="address" value={addressline1} onChange={(e) => setAddressLine1(e.target.value)} />
          </label>
          <label>Current Address Line 2
            <input type="text" name="address" value={addressline2} onChange={(e) => setAddressLine2(e.target.value)} />
          </label>
          <label>Country
            <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>
          <label>Educational Qualification
            <input type="text" name="qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
          </label>
        </div>

        <div className={styles.application_form_body_specifics}>
          <div className={styles.checked}>
            <p>Do you have any relevant experience in teaching?</p>
            <div className={styles.radio}>
              <input type="radio" name="experience" onChange={onChangeValue} checked={experience == "No"} value="No" />No
              <input type="radio" name="experience" onChange={onChangeValue} checked={experience == "Yes"} value="Yes" />Yes
            </div>
          </div>

          <div className={styles.checked}>
            <p>Please select below if you’re a Native or Non-native English speaker.</p>
            <div className={styles.radio}>
              <input type="radio" name="native" onChange={onChangeNative} checked={native == "Native"} value="Native" />Native
              <input type="radio" name="native" onChange={onChangeNative} checked={native == "Non-native"} value="Non-native" />Non-native
            </div>
          </div>

          <div className={styles.checked}>
            <p>Please Upload Your CV (.pdf, .png, .jpg, .doc, .docx)</p>
            <div className={styles.cv}>
              <input type="file" name="curriculum_vitae" onChange={uploadCV} />
              <span>{uploadCVRes}</span>
            </div>
          </div>

          <div className={styles.checked}>
            <p>Please upload a video introducing yourself and why you are applying for this job. (mp4 only)</p>
            <div className={styles.cv}>
              <input type="file" name="curriculum_vitae" onChange={uploadVideoCV} />
              <span>{uploadVCVRes}</span>
            </div>
          </div>

          <div className={styles.terms}>
          <label>
            <input type="checkbox" name="agreement" value={agreement} onChange={(e) => setAgreement(e.target.value)} />I agree to the Terms and Services. My contact details will be processed according to them.
          </label>
          </div>

          <input id={styles["button"]} type="submit" value="Submit Application" />
        </div>

        <span>{response}</span>
      </div>
    </form>
  );
};
export default ApplicationForm;