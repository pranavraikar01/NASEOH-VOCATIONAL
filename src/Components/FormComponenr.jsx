// FormComponent.js
import React, { useState } from "react";
import styles from "./FormComponent.module.css";

const formDataPages = [
  [
    { label: "Reg No", type: "text", name: "regno" },
    { label: "Date of admission", type: "date", name: "doa" },
    { label: "Referred by", type: "text", name: "referredby" },

    { label: "Date of completion", type: "date", name: "doc" },
  ],
  [
    { label: "Full Name", type: "text", name: "fullname" },
    { label: "Present address", type: "text", name: "presentaddress" },
    { label: "Permanent address", type: "text", name: "permanentaddress" },
    { label: "Phone", type: "tel", name: "phone" },
  ],
  [
    { label: "Aadhar card number", type: "number", name: "aadharcardno" },
    { label: "Date of birth", type: "date", name: "dob" },
    { label: "Age", type: "number", name: "age" },
    { label: "Single/Married/Divorced", type: "text", name: "relstatus" },
    { label: "Religion/Caste", type: "text", name: "religion" },
    { label: "Nature of disability", type: "text", name: "natureofdisability" },
    { label: "Reason for referral", type: "text", name: "reasonref" },
    {
      label: "History of present problem",
      type: "text",
      name: "problemhistory",
    },
    {
      label: "Any external aid/device currently used",
      type: "text",
      name: "aidinfo",
    },
    {
      label: "Any other illness/medication",
      type: "text",
      name: "medicationinfo",
    },
    { label: "Substance/Drug misuse history", type: "text", name: "druginfo" },
    {
      label: "Vocational rehabilitation centre Reg. No",
      type: "text",
      name: "rehabno",
    },
    { label: "Special employee exchange no", type: "text", name: "empexno" },
  ],
  [
    { label: "Father's details", type: "text", name: "fathername" },
    { label: "Father's Age", type: "number", name: "fatherage" },
    { label: "Father's Education", type: "text", name: "fathereducation" },
    { label: "Father's Occupation", type: "text", name: "fatheroccupation" },
    { label: "Father's Income", type: "text", name: "fatherincome" },
    { label: "Mother's details", type: "text", name: "mothername" },
    { label: "Mother's Age", type: "number", name: "motherage" },
    { label: "Mother's Education", type: "text", name: "mothereducation" },
    { label: "Mother's Occupation", type: "text", name: "motheroccupation" },
    { label: "Mother's Income", type: "text", name: "motherincome" },
  ],
  [
    {
      label: "SSC",
      type: "group",
      children: [
        // { label: "SSC", type: "text", name: "examination1" },
        { label: "Year of passing ", type: "text", name: "SSCpassingyear" },
        { label: "Marks obtained ", type: "text", name: "SSCmarks" },
      ],
    },
    {
      label: "HSC",
      type: "group",
      children: [
        // { label: "HSC", type: "text", name: "examination2" },
        { label: "Year of passing", type: "text", name: "HSCpassingyear" },
        { label: "Marks obtained", type: "text", name: "Hscmarks" },
      ],
    },
    {
      label: "GRADUATION",
      type: "group",
      children: [
        { label: "Graduation", type: "dropdown", name: "graduation" },
        { label: "Year of passing", type: "text", name: "GraduationYear" },
        { label: "Marks obtained", type: "text", name: "Graduationmarks" },
      ],
    },
  ],
];

const itemsPerPage = 4;

const FormComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  const totalPages = formDataPages.length;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Updated renderFormFields function
  const renderFormFields = () => {
    const currentPageData = formDataPages[currentPage - 1];

    return currentPageData.map((field, index) => (
      <div key={index} className={styles.formField}>
        {field.type === "group" ? (
          <>
            <div className={styles.groupLabel}>{field.label}</div>
            {field.children.map((child, childIndex) => (
              <div key={childIndex} className={styles.formField}>
                {child.type === "dropdown" ? (
                  <>
                    <label htmlFor={child.name}>{child.label}</label>
                    <select
                      id={child.name}
                      name={child.name}
                      className={styles.formInput}
                      value={formData[child.name] || ""}
                      onChange={handleChange}
                    >
                      <option value="BSC">BSC</option>
                      <option value="BCOM">BCOM</option>
                      <option value="BA">BA</option>
                      <option value="Other">Other</option>
                    </select>
                    {formData[child.name] === "Other" && (
                      <div className={styles.formField}>
                        <label htmlFor="specificGraduation">Other</label>
                        <textarea
                          id="specificGraduation"
                          name="specificGraduation"
                          className={styles.formInput}
                          value={formData.specificGraduation || ""}
                          onChange={handleChange}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <label htmlFor={child.name}>{child.label}</label>
                    <input
                      type={child.type}
                      id={child.name}
                      name={child.name}
                      className={styles.formInput}
                      value={formData[child.name] || ""}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              className={styles.formInput}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          </>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.formContainer}>
      <h1>Hi</h1>
      <div className={styles.formGrid}>{renderFormFields()}</div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <pre>
          <strong>FormData:</strong> {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default FormComponent;
