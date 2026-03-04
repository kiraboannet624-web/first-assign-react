function IdCard({ image, name, role, department, idNumber, email }) {
  return (
    <article className="mt-2 w-80 rounded-xl bg-white p-6 shadow-lg ">
      <img src={image} alt={name} className="mx-auto block h-32 w-32 rounded-full object-cover" />
      <h2 className="mt-6 text-center text-3xl font-bold">{name}</h2>
      <p className="mt-2 text-center text-lg">{role}</p>

      <div className="mt-4 space-y-1 text-sm text-slate-700 bg-emerald-200 rounded-lg">
        <p>
          <span className="font-semibold">Department:</span> {department}
        </p>
        <p>
          <span className="font-semibold">ID:</span> {idNumber}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white">View Profile</button>
    </article>
  )
}

export default IdCard
