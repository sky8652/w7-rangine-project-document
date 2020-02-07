<?php

namespace W7\App\Provider\Socialite\ThirdPartyLogin;

use Overtrue\Socialite\Providers\QQProvider;

class WechatOauth extends QQProvider
{
    use OauthTrait;

    public function getAppUnionId()
    {
        return 'wechat';
    }

    /**
     * Get the token URL for the provider.
     *
     * @return string
     */
    protected function getTokenUrl()
    {
        return parent::getTokenUrl();
    }
}