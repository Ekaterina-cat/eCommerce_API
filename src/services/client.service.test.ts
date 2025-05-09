import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { clientService } from '@services/client.service.ts';

describe('ClientService', () => {
    const fakeCustomer = { email: 'test@email.com', password: 'test' };
    const fakeUserInfo = {
        customer: fakeCustomer,
        tokenStore: {
            token: '',
            refreshToken: '',
            expirationTime: 0,
        },
    };
    const postMock = vi.fn().mockReturnValue({
        execute: vi.fn().mockResolvedValue({
            statusCode: 200,
            body: { customer: fakeCustomer },
        }),
    });
    const withProjectKeyMock = vi.fn().mockReturnValue({
        login: () => ({ post: postMock }),
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(createApiBuilderFromCtpClient).mockReturnValue({
            withProjectKey: withProjectKeyMock,
        } as unknown as ReturnType<typeof createApiBuilderFromCtpClient>);
    });

    it('calls successCallback', async () => {
        const successCallback = vi.fn();
        const result = await clientService.login({
            email: fakeCustomer.email,
            password: fakeCustomer.password,
            successCallback,
        });

        expect(result).toEqual(fakeUserInfo);
        expect(successCallback).toHaveBeenCalledWith(fakeUserInfo);
    });
});
