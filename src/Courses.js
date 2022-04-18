import React from 'react'
import './Courses.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Courses = () => {
    return (
        <div className='courses-main'>
            <div className="courses-content">
                <div className="courses-heading">
                    <div className="courses-heading-left">
                        <div className='courses-title'>
                            <h1>Courses</h1>
                        </div>
                        <div className='courses-count'>/1</div>
                    </div>
                    <div className="courses-heading-right">
                        <div className="courses-option">
                            <div className="courses-option-row"><ViewColumnIcon /></div>
                            <div className="courses-option-col"><ArrowForwardIcon /></div>
                        </div>
                        <div className="courses-option">
                            <div className="courses-option-icon"><ExitToAppIcon /></div>
                            <div className="courses-option-info">Export</div>
                        </div>
                        <div className="courses-option">

                            <div className="courses-option-icon"><FilterAltIcon /></div>
                            <div className="courses-option-info">Filter</div>
                        </div>
                        <div className="courses-option courses-new">
                            + New Course
                        </div>
                    </div>
                </div>
                <div className="courses-list">
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 1</div>
                            <div className="courses-status">Not Published</div>
                        </div>
                    </div>
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 2</div>
                            <div className="courses-status">Not published</div>
                        </div>
                    </div>
                    <div className="courses-allList">
                        <div className="courses-info">
                            {/* photo */}
                        </div>
                        <div className="courses-title">
                            <div className="courses-name">Sample 3</div>
                            <div className="courses-status">Not Published</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses