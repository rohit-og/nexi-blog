import React from 'react'

const SubItem = ({email,mongoId, deleteEmail, date}) => {
  const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email"}
        </th>
        <td className='hidden sm:block px-6 py-4'>
            {emailDate.toDateString()}
        </td>
        <td onClick={()=> deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default SubItem