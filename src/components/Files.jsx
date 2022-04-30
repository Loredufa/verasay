import React from "react";
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker';


export default function Files() {

    // const [openPicker, data, authResponse] = useDrivePicker();  
    // // const customViewsArray = [new google.picker.DocsView()]; // custom view
    // const handleOpenPicker = () => {
    //   openPicker({
    //     clientId: "347444893407-85f9qgfh2coa12kqpif7s6eturrs9ghu.apps.googleusercontent.com",
    //     developerKey: "AIzaSyCKtdYya3N33Zm0ItdxP7z0P8uuhjETIBo",
    //     viewId: "DOCS",
    //     token: "ya29.A0ARrdaM-2i9eQxgkeCsMs0Nrz3v0ds6k33CrTUaCk9_M0_DJeEgWiNEMUZ7BlPfgLNKECMMiK6qD16j6XkP9gHCLMiyKFQrC9I84nftRYBnqqCblabXg2efX6asrz4qmYZ2fOCtp_lSJJnUvOfiSrJ0ritUDB", // pass oauth token in case you already have one
    //     showUploadView: true,
    //     showUploadFolders: true,
    //     supportDrives: true,
    //     multiselect: true,
    //     // customViews: customViewsArray, // custom view
    //   })
    // }
  
    // useEffect (() => {
    //  //do anything with the selected/uploaded files
    //   if(data){
    //     data.docs.map((i) => console.log (i) )
    //   }}, [data]  )
    
    return (
      <div>
          {/* <button onClick={() => handleOpenPicker()}>Open Picker</button> */}
      </div>
    );
  }

