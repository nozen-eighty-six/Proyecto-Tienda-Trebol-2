const DistrictOption = ({ data, handleChange, form, handleBlur }) => {
  return (
    <select
      name="district"
      id=""
      value={form.district}
      onChange={handleChange}
      onBlur={handleBlur}
      className="w-85 p-2 text-sm outline-none border border-t-white border-r-white border-l-white border-b-black"
    >
      <option value="default">Selecciona un distrito</option>
      {data.map((dis) => (
        <option
          key={dis}
          value={dis.charAt(0).toUpperCase() + dis.slice(1).toLowerCase()}
        >
          {dis.charAt(0).toUpperCase() + dis.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default DistrictOption;
