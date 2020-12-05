import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSorts } from '../store/jobs.action'
import JobItem from './JobItem';

const SORT_FIELDS = {
    'Title': 'job_title',
    'Location': 'location',
    'Experience': 'experience',
    'Date': 'created'
}

export default function Jobs({filters}) {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)  
    const { query, jobs } = state.jobs

    const handleSort = (type) => {
        if (!query.sort[type]) {
            query.sort[type] = 'asc';
        } else if (query.sort[type] === 'asc') {
            query.sort[type] = 'desc';
        } else {
            delete query.sort[type];
        }
        
        dispatch(setSorts(query.sort))
    }   

    return (
        <>
            <div className="w-3/4 w-full flex flex-col min-h-screen h-full">
                <div className="flex flex-col ">
                    <div className="bg-white min-h-screen h-auto flex flex-col w-full">
                        <div className="sortby-wrap">
                            <div><span className="font-bold">{jobs.reduce((count, job) => count + job.total_jobs_in_hospital, 0)}</span> job postings</div>
                            <div className="hidden lg:flex lg:space-x-4 pt-2 lg:flex-row flex-col">
                                <h4 className="font-semibold text-gray-500 flex-col">Sort by</h4>
                                <div className="flex lg:pt-0 pt-2 space-x-4 item-start">
                                    {Object.keys(SORT_FIELDS).map(field => {
                                        return (
                                            <p className="capitalize cursor-pointer" onClick={()=>handleSort(SORT_FIELDS[field])}>
                                                {field}
                                                {query.sort[SORT_FIELDS[field]] && 
                                                    <>
                                                        {query.sort[SORT_FIELDS[field]] === 'desc' ? 
                                                            <i className="fa fa-arrow-up ml-1 mr-1" aria-hidden="true"></i> :
                                                            <i className="fa fa-arrow-down ml-1 mr-1" aria-hidden="true"></i>
                                                        }
                                                    </>
                                                }
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <ul className="joblisting">
                            { jobs.map((job, index) => <JobItem key={index} job={job} />) }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}