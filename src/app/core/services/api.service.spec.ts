import {ApiService} from './api.service';
import {HttpClientStub} from '@stubs/http-client.stub';

describe('Unit Test - ApiService', () => {
    const path = '/test';
    const errorMessage = 'thrown error';
    let httpClient: HttpClientStub;
    let apiService: ApiService;
    let getSpy: jasmine.Spy;
    let postSpy: jasmine.Spy;

    beforeEach(() => {
        httpClient = new HttpClientStub();
        apiService = new ApiService(httpClient as any);
        getSpy = spyOn(httpClient, 'get').and.callFake(function () { // tslint:disable-line
            expect(arguments[0]).toContain(path);
        }).and.callThrough();
        postSpy = spyOn(httpClient, 'post').and.callFake(function () { // tslint:disable-line
            expect(arguments[0]).toContain(path);
        }).and.callThrough();
    });

    it('should be created', () => {
        expect(apiService).toBeTruthy();
    });

    it('#get should send a get request to a url containing the path parameter', async () => {
        await apiService.get(path).toPromise();

        expect(getSpy).toHaveBeenCalled();
    });

    it('#get should catch a thrown error and rethrow after re-formatting as desired', async () => {
        let didGetError = false;
        getSpy = getSpy.and.throwError(errorMessage);

        try {
            await apiService.get(path).toPromise();
        } catch ({message}) {
            didGetError = true;
            expect(message).toBe(errorMessage);
        }

        expect(didGetError).toBeTruthy();
    });

    it('#post should send a post request to a url containing the path parameter', async () => {
        await apiService.post(path).toPromise();

        expect(postSpy).toHaveBeenCalled();
    });

    it('#post should catch a thrown error and rethrow after re-formatting as desired', async () => {
        let didGetError = false;
        postSpy = postSpy.and.throwError(errorMessage);

        try {
            await apiService.post(path).toPromise();
        } catch ({message}) {
            didGetError = true;
            expect(message).toBe(errorMessage);
        }

        expect(didGetError).toBeTruthy();
    });

});
