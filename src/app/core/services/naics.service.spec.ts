import {NaicsService, QuestionOption, UnmappedNaicsResponse} from '@core';
import {Observable, of} from 'rxjs';
import {ApiServiceStub} from '@stubs/services/api-service.stub';

describe('Unit Tests - NaicsService', () => {
    const queryString = 'query';
    const code = '1';
    const description = '2';
    let apiResponse: Observable<UnmappedNaicsResponse[]>;
    let naicsService: NaicsService;
    let apiService: ApiServiceStub;
    let apiSpy: jasmine.Spy;

    beforeEach(() => {
        apiResponse = of([{code, description}]);
        apiService = new ApiServiceStub();
        naicsService = new NaicsService(apiService as any);
        apiSpy = spyOn(apiService, 'get').and.returnValue(apiResponse);
    });

    it(`the search response should be mapped to an array of QuestionsOptions.`, async () => {
        const [firstQuestion]: QuestionOption[] = await naicsService.search(queryString).toPromise();

        expect(firstQuestion.id && firstQuestion.id.toString()).toBe(code);
        expect(firstQuestion.text).toBe(description);
    });
});
