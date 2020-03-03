import {ApplicationService, UnmappedNaicsResponse} from '@core';
import {ApplicationRequest} from '@core';
import {ApiServiceStub} from '@stubs/services/api-service.stub';
import {Observable, of} from 'rxjs';

describe('Unit Test - ApplicationService', () => {
    const code = '1';
    const description = '2';
    let apiResponse: Observable<UnmappedNaicsResponse[]>;
    let appService: ApplicationService;
    let apiService: ApiServiceStub;
    let apiSpy: jasmine.Spy;

    beforeEach(() => {
        apiResponse = of([{code, description}]);
        apiService = new ApiServiceStub();
        appService = new ApplicationService(apiService as any);
        apiSpy = spyOn(apiService, 'post').and.returnValue(apiResponse);
    });

    it('should be created', () => {
        expect(appService).toBeTruthy();
    });

    it(`#submitApplication should send a post request to the api's endpoint with the payload provided in parameters.`, () => {
        const payload = {responses: []} as ApplicationRequest;

        appService.submitApplication(payload);

        expect(apiSpy).toHaveBeenCalledWith('/application_forms', payload);
    });
});
