const Applicant = require('../models/applicants');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendEmail = require('../utils/sendEmail');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../public')
  },
  filename: function(req, file, cb) {
    const suffixName = Date.now() + '-' + file.originalname
    cb(null, suffixName)
  }
})

const upload = multer({ storage: storage }).single('file')

//Register an Applicant
exports.registerApplicant = catchAsyncErrors(async (req, res, next) => {
  const { firstName, middleName, lastName, email, phoneNo, dateOfBirth, addressline1, addressline2, experience, country, qualification, native, agreement, cv, videoCv } = req.body;

  const user = await Applicant.create({
    firstName, middleName, lastName, email, phoneNo, dateOfBirth, addressline1, addressline2, experience, country, qualification, native, agreement, cv, videoCv
  });

  // await sendEmail({
  //   email: user.email,
  //   subject: 'Thank you for subscribing!',
  //   message: `Hi ${user.firstName},\n\nThank you for submitting your application.`,
  // });

  // await sendEmail({
  //   email: 'admin@tefljobsinasia.com',
  //   subject: 'New Applicant!',
  //   message: `You have a new applicant.\n\nUser details:\n\nFirst Name: ${user.firstName}\nMiddle Name: ${user.middleName}\nLast Name: ${user.lastName}\nEmail: ${user.email}\nPhone: ${user.phoneNo}\nDate of Birth: ${user.dateOfBirth}\nAddress: ${user.addressline1} ${user.addressline2}\nExperience: ${user.experience}\nCountry: ${user.country}\nNative/Non-native: ${user.native}\nQualification: ${user.qualification}\nAgreement: ${user.agreement}\nCV: ${user.cv}\nVideo Intro: ${user.videoCv}\n`,
  // });

  res.status(200).json({
    success: true,
    message: `Applicant created successfully. An Email sent to ${user.email}`,
  });

});

exports.registerFile = catchAsyncErrors(async (req, res, next) => {

  upload(req, res, (err) => {
    if(req.file){
      res.status(200).json({
        success: true,
        filename: req.file.filename
      })
    }
    else if(err) return res.status(500).json(err)
  }) 
})

exports.getApplicants = catchAsyncErrors(async (req, res, next) => {
  const applicants = await Applicant.find();
  res.status(200).json({
    success: true,
    applicants,
  });
});