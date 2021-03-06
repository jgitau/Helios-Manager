from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('job',
                       # Examples:
                       # url(r'^show/(?P<id>[\w.,/:\,/_\-]+)/$', 'views.showJob', name='showJob'),
                       url(r'^$', 'views.listAllJob', name='listJob'),
                       url(r'^show/$', 'views.showJob', name='showJob'),
                       url(r'^details/(?P<host>[\w.,/_\-]+)/$', 'views.detailsJob', name='detailsJob'),
                       url(r'^deploy/$', 'views.deployJob', name='deployJob'),
                       url(r'^undeploy/$', 'views.undeployJob', name='undeployJob'),
                       url(r'^start-stop/$', 'views.startstopJob', name='startstopJob'),
                       url(r'^remove/$', 'views.removeJob', name='removeJob'),
                       url(r'^history/(?P<job>[\w.,/_\-:]+)/$', 'views.historyJob', name='historyJob'),

                       # JSON
                       url(r'^show/all/$', 'views.showAllJob', name='showAllJob'),
                       )
