import {LabelInputType} from "../interface";

export function LabelledInput({type, label, placeholder, onChange}: LabelInputType){
  return (
    <div>
      <label className="pt-5 pb-2 block mb-2 text-md font-bold text-gray-900 dark:text-white">{label}</label>
      <input type={type}
             onChange={onChange}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder={placeholder} required/>
    </div>
  )
}
