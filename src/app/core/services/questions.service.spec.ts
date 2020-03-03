import {QuestionsService} from './questions.service';
import {ApiServiceStub} from '@stubs/services/api-service.stub';

describe('Unit Test - QuestionsService', () => {
    let service: QuestionsService;
    let apiService: ApiServiceStub;
    let apiSpy: jasmine.Spy;

    beforeEach(() => {
        apiService = new ApiServiceStub();
        service = new QuestionsService(apiService as any);
        apiSpy = spyOn(apiService, 'get').and.callThrough();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`#getQuestions should make a get request to the questions endpoint and return the result.`, async () => {
        const questions = await service.getQuestions().toPromise();

        expect(apiSpy).toHaveBeenCalledWith('/questions');
        expect(questions).toBe(ApiServiceStub.FAKE_API_RESPONSE_VALUES as any);
    });
});
