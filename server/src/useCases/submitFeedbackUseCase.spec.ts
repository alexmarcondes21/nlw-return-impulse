import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () =>{
       await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,k32jk3kj325bdsdf',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit without type', async () =>{
    await expect(submitFeedback.execute({
   type: '',
   comment: 'example comment',
   screenshot: 'data:image/png;base64,k32jk3kj325bdsdf',
 })).rejects.toThrow();
  
 it('should not be able to submit without comment', async () =>{
  await expect(submitFeedback.execute({
 type: 'BUG',
 comment: '',
 screenshot: 'data:image/png;base64,k32jk3kj325bdsdf',
})).rejects.toThrow();
 });
 
 it('should not be able to submit with invalid screenshot', async () =>{
  await expect(submitFeedback.execute({
 type: 'BUG',
 comment: 'example comment',
 screenshot: 'test.jpg',
})).rejects.toThrow();
 });
 

});

  

  
});