import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

function PdfReader() {
  return (
    <PDFViewer
      document={{
        url: 'https://firebasestorage.googleapis.com/v0/b/edu-project-2423e.appspot.com/o/Notes%2FDepartment%2FENTC%2FACS%20-%20Analog%20Communication%20System%2FUNIT%201(ACS)%20-Introduction%20to%20communication%20system.pdf?alt=media&token=af043996-b547-45fc-a753-af77ecf9261e',
      }}
    />
  )
}

export default PdfReader