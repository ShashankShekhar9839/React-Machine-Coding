import React from "react";

const Folder = ({ explorer }) => {
  if (explorer.isFolder) {
    return (
      <div className="root-folder-wrapper">
        📁{explorer.name}
        <div style={{paddingLeft: '20px'}}>
        {explorer?.items?.map((item => (
            <Folder explorer={item}/>
         )))}
        </div>

      </div>
    );
  }
  return <div>🗃️ {explorer.name}</div>;
};

export default Folder;
