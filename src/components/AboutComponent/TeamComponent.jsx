/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../../redux/async/teamSlice';

const TeamComponent = () => {
  const dispatch = useDispatch();
  const { teams, isLoading, isSuccess, error } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeams()); // Fetch team data
  }, [dispatch]);

  return (
    <div className='max-w-screen-xl mx-auto py-20 px-4 lg:px-8'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900'>Meet the heroes behind the magic</h1>
      </div>

      {/* Team Grid */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {isLoading && <p className='text-center text-gray-500'>Loading...</p>}
        {error && <p className='text-center text-red-500'>Failed to load teams</p>}
        {isSuccess &&
          teams.map((team) => (
            <div key={team.id} className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
              <div className='w-32 h-32 rounded-full overflow-hidden mb-4'>
                <img src={team.photo} alt={team.name} className='w-full h-full object-cover' />
              </div>
              <h2 className='text-lg font-bold text-gray-900'>{team.name}</h2>
              <p className='text-gray-500 mb-4'>{team.title}</p>
              <div className='flex gap-4'>
                {team.linkedin_url && (
                  <a href={team.linkedin_url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-700 transition'>
                    LINKEDIN &rarr;
                  </a>
                )}
                {team.ig_url && (
                  <a href={team.ig_url} target='_blank' rel='noopener noreferrer' className='text-pink-500 hover:text-pink-700 transition'>
                    INSTAGRAM &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamComponent;
