import React from 'react'
import './Collection.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function Collection() {
    return (
        <div className='collection-main'>
            <div className="collection-content">
                <div className="collection-heading">
                    <div className="collection-heading-left">
                        <div className='collection-title'>
                            <h1>Collections</h1>
                        </div>
                        <div className='collection-count'>/0</div>
                    </div>
                    <div className="collection-heading-right">
                        <div className="collection-option">
                            <div className="collection-option-row"><ViewColumnIcon /></div>
                            <div className="collection-option-col"><ArrowForwardIcon /></div>
                        </div>
                        <div className="collection-option">
                            <div className="collection-option-icon"><ExitToAppIcon /></div>
                            <div className="collection-option-info">Export</div>
                        </div>
                        <div className="collection-option">

                            <div className="collection-option-icon"><FilterAltIcon /></div>
                            <div className="collection-option-info">Filter</div>
                        </div>
                        <div className="collection-option collection-new">
                            + New Course
                        </div>
                    </div>
                </div>
                <div className="collection-list">
                    <div className="collection-allList">
                        <div className="collection-empty">
                        <InsertDriveFileIcon />
                            No Collections to show yet
                        </div>
                        <div className="collection-help">
                        If you need any help, check our <a href="#"> knowledge base</a> or <a href="#">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection