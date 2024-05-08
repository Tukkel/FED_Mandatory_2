const Job: React.FC<JobProps> = ({ job, onJobChanged }) => {
  return (
    <Card sx={{ backgroundColor: "#d3d3d3" }}>
      <CardContent>
        <div>
          <ChangeJobFormDialog onJobChanged={onJobChanged} job={job} />
        </div>
        <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p>Days: {job.days}</p>
        <p>Location: {job.location}</p>
        <p>Comments: {job.comments}</p>
        <p className={""}>Models on this job:</p>
        {job.models &&
          job.models.map((model, modelIndex) => (
            <div key={modelIndex} className="my-2">
              <Button
                variant="contained"
                onClick={() =>
                  alert(
                    `First Name: ${model.firstName}\nLast Name: ${model.lastName}\nPhone Number: ${model.phoneNo}\nEmail: ${model.email}`
                  )
                }
              >
                {model.firstName} {model.lastName}
              </Button>
            </div>
          ))}
        <div className="my-2">
          <JobAddModelForm job={job} onJobChanged={onJobChanged} />
        </div>
      </CardContent>
    </Card>
  );
};
export default Job;
