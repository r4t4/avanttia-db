// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  account_statement_notifications:def.account_statement_notificationsModel;
  accounts:def.accountsModel;
  comercial_activities:def.comercial_activitiesModel;
  banks:def.banksModel;
  banxico_exchange_rate:def.banxico_exchange_rateModel;
  collection_policies:def.collection_policiesModel;
  company_intercom_data:def.company_intercom_dataModel;
  company_payments:def.company_paymentsModel;
  companies:def.companiesModel;
  contact_email:def.contact_emailModel;
  company_site:def.company_siteModel;
  company_user:def.company_userModel;
  contpaqi_license_config_log:def.contpaqi_license_config_logModel;
  contact_phone:def.contact_phoneModel;
  contacts:def.contactsModel;
  credit_notes:def.credit_notesModel;
  contracts:def.contractsModel;
  credit_days:def.credit_daysModel;
  credit_report_addresses:def.credit_report_addressesModel;
  credit_payments:def.credit_paymentsModel;
  credit_report_accounts:def.credit_report_accountsModel;
  credit_report_customers:def.credit_report_customersModel;
  credit_report_companies:def.credit_report_companiesModel;
  credit_report_credits:def.credit_report_creditsModel;
  credit_report_morals:def.credit_report_moralsModel;
  credit_report_employments:def.credit_report_employmentsModel;
  credit_report_endorses:def.credit_report_endorsesModel;
  cuenta_clabe_control:def.cuenta_clabe_controlModel;
  currencies:def.currenciesModel;
  credit_report_shareholders:def.credit_report_shareholdersModel;
  credit_reports:def.credit_reportsModel;
  customers:def.customersModel;
  customers_pending_balance:def.customers_pending_balanceModel;
  customer_invites:def.customer_invitesModel;
  customers_unassigned:def.customers_unassignedModel;
  customers_without_logbook:def.customers_without_logbookModel;
  dispersion_orders:def.dispersion_ordersModel;
  discounts:def.discountsModel;
  distributor_levels:def.distributor_levelsModel;
  erps:def.erpsModel;
  economic_sectors:def.economic_sectorsModel;
  distributors:def.distributorsModel;
  historial_deuda_comentarios:def.historial_deuda_comentariosModel;
  extensions:def.extensionsModel;
  failed_jobs:def.failed_jobsModel;
  import_data_service_logs:def.import_data_service_logsModel;
  history_assignments:def.history_assignmentsModel;
  history_invoices:def.history_invoicesModel;
  invoice_json:def.invoice_jsonModel;
  incidence_reasons:def.incidence_reasonsModel;
  incidences:def.incidencesModel;
  licences:def.licencesModel;
  jobs:def.jobsModel;
  licence_renewals:def.licence_renewalsModel;
  licenses_feraz:def.licenses_ferazModel;
  license_payments:def.license_paymentsModel;
  licenses_contpaqi:def.licenses_contpaqiModel;
  migrations:def.migrationsModel;
  logbook:def.logbookModel;
  logbook_payment:def.logbook_paymentModel;
  notifications:def.notificationsModel;
  notification_rules:def.notification_rulesModel;
  notification_templates:def.notification_templatesModel;
  notifications_sms:def.notifications_smsModel;
  notifications_templates:def.notifications_templatesModel;
  notifications_config:def.notifications_configModel;
  notifications_customers:def.notifications_customersModel;
  oauth_auth_codes:def.oauth_auth_codesModel;
  oauth_clients:def.oauth_clientsModel;
  oauth_access_tokens:def.oauth_access_tokensModel;
  password_resets:def.password_resetsModel;
  oauth_personal_access_clients:def.oauth_personal_access_clientsModel;
  oauth_refresh_tokens:def.oauth_refresh_tokensModel;
  payment_formats:def.payment_formatsModel;
  pay_days:def.pay_daysModel;
  payment_concepts:def.payment_conceptsModel;
  payment_promise:def.payment_promiseModel;
  payment_methods:def.payment_methodsModel;
  payment_periods:def.payment_periodsModel;
  payments:def.paymentsModel;
  payment_promise_receivables:def.payment_promise_receivablesModel;
  payment_request_receivable:def.payment_request_receivableModel;
  payments_receivable:def.payments_receivableModel;
  payments_request:def.payments_requestModel;
  permission_role:def.permission_roleModel;
  periods:def.periodsModel;
  permissions:def.permissionsModel;
  receivables:def.receivablesModel;
  plans:def.plansModel;
  promises_payment:def.promises_paymentModel;
  role_user:def.role_userModel;
  roles:def.rolesModel;
  receivables_notifications:def.receivables_notificationsModel;
  recovery_goals:def.recovery_goalsModel;
  sites:def.sitesModel;
  sync_log:def.sync_logModel;
  transactions:def.transactionsModel;
  sat_sync_webhook_log:def.sat_sync_webhook_logModel;
  user_notifications:def.user_notificationsModel;
  user_sync_log:def.user_sync_logModel;
  transactions_files:def.transactions_filesModel;
  user_sync_log_payments:def.user_sync_log_paymentsModel;
  users:def.usersModel;
  webservices_log:def.webservices_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    account_statement_notifications: seq.import(path.join(__dirname, './account_statement_notifications')),
    accounts: seq.import(path.join(__dirname, './accounts')),
    comercial_activities: seq.import(path.join(__dirname, './comercial_activities')),
    banks: seq.import(path.join(__dirname, './banks')),
    banxico_exchange_rate: seq.import(path.join(__dirname, './banxico_exchange_rate')),
    collection_policies: seq.import(path.join(__dirname, './collection_policies')),
    company_intercom_data: seq.import(path.join(__dirname, './company_intercom_data')),
    company_payments: seq.import(path.join(__dirname, './company_payments')),
    companies: seq.import(path.join(__dirname, './companies')),
    contact_email: seq.import(path.join(__dirname, './contact_email')),
    company_site: seq.import(path.join(__dirname, './company_site')),
    company_user: seq.import(path.join(__dirname, './company_user')),
    contpaqi_license_config_log: seq.import(path.join(__dirname, './contpaqi_license_config_log')),
    contact_phone: seq.import(path.join(__dirname, './contact_phone')),
    contacts: seq.import(path.join(__dirname, './contacts')),
    credit_notes: seq.import(path.join(__dirname, './credit_notes')),
    contracts: seq.import(path.join(__dirname, './contracts')),
    credit_days: seq.import(path.join(__dirname, './credit_days')),
    credit_report_addresses: seq.import(path.join(__dirname, './credit_report_addresses')),
    credit_payments: seq.import(path.join(__dirname, './credit_payments')),
    credit_report_accounts: seq.import(path.join(__dirname, './credit_report_accounts')),
    credit_report_customers: seq.import(path.join(__dirname, './credit_report_customers')),
    credit_report_companies: seq.import(path.join(__dirname, './credit_report_companies')),
    credit_report_credits: seq.import(path.join(__dirname, './credit_report_credits')),
    credit_report_morals: seq.import(path.join(__dirname, './credit_report_morals')),
    credit_report_employments: seq.import(path.join(__dirname, './credit_report_employments')),
    credit_report_endorses: seq.import(path.join(__dirname, './credit_report_endorses')),
    cuenta_clabe_control: seq.import(path.join(__dirname, './cuenta_clabe_control')),
    currencies: seq.import(path.join(__dirname, './currencies')),
    credit_report_shareholders: seq.import(path.join(__dirname, './credit_report_shareholders')),
    credit_reports: seq.import(path.join(__dirname, './credit_reports')),
    customers: seq.import(path.join(__dirname, './customers')),
    customers_pending_balance: seq.import(path.join(__dirname, './customers_pending_balance')),
    customer_invites: seq.import(path.join(__dirname, './customer_invites')),
    customers_unassigned: seq.import(path.join(__dirname, './customers_unassigned')),
    customers_without_logbook: seq.import(path.join(__dirname, './customers_without_logbook')),
    dispersion_orders: seq.import(path.join(__dirname, './dispersion_orders')),
    discounts: seq.import(path.join(__dirname, './discounts')),
    distributor_levels: seq.import(path.join(__dirname, './distributor_levels')),
    erps: seq.import(path.join(__dirname, './erps')),
    economic_sectors: seq.import(path.join(__dirname, './economic_sectors')),
    distributors: seq.import(path.join(__dirname, './distributors')),
    historial_deuda_comentarios: seq.import(path.join(__dirname, './historial_deuda_comentarios')),
    extensions: seq.import(path.join(__dirname, './extensions')),
    failed_jobs: seq.import(path.join(__dirname, './failed_jobs')),
    import_data_service_logs: seq.import(path.join(__dirname, './import_data_service_logs')),
    history_assignments: seq.import(path.join(__dirname, './history_assignments')),
    history_invoices: seq.import(path.join(__dirname, './history_invoices')),
    invoice_json: seq.import(path.join(__dirname, './invoice_json')),
    incidence_reasons: seq.import(path.join(__dirname, './incidence_reasons')),
    incidences: seq.import(path.join(__dirname, './incidences')),
    licences: seq.import(path.join(__dirname, './licences')),
    jobs: seq.import(path.join(__dirname, './jobs')),
    licence_renewals: seq.import(path.join(__dirname, './licence_renewals')),
    licenses_feraz: seq.import(path.join(__dirname, './licenses_feraz')),
    license_payments: seq.import(path.join(__dirname, './license_payments')),
    licenses_contpaqi: seq.import(path.join(__dirname, './licenses_contpaqi')),
    migrations: seq.import(path.join(__dirname, './migrations')),
    logbook: seq.import(path.join(__dirname, './logbook')),
    logbook_payment: seq.import(path.join(__dirname, './logbook_payment')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    notification_rules: seq.import(path.join(__dirname, './notification_rules')),
    notification_templates: seq.import(path.join(__dirname, './notification_templates')),
    notifications_sms: seq.import(path.join(__dirname, './notifications_sms')),
    notifications_templates: seq.import(path.join(__dirname, './notifications_templates')),
    notifications_config: seq.import(path.join(__dirname, './notifications_config')),
    notifications_customers: seq.import(path.join(__dirname, './notifications_customers')),
    oauth_auth_codes: seq.import(path.join(__dirname, './oauth_auth_codes')),
    oauth_clients: seq.import(path.join(__dirname, './oauth_clients')),
    oauth_access_tokens: seq.import(path.join(__dirname, './oauth_access_tokens')),
    password_resets: seq.import(path.join(__dirname, './password_resets')),
    oauth_personal_access_clients: seq.import(path.join(__dirname, './oauth_personal_access_clients')),
    oauth_refresh_tokens: seq.import(path.join(__dirname, './oauth_refresh_tokens')),
    payment_formats: seq.import(path.join(__dirname, './payment_formats')),
    pay_days: seq.import(path.join(__dirname, './pay_days')),
    payment_concepts: seq.import(path.join(__dirname, './payment_concepts')),
    payment_promise: seq.import(path.join(__dirname, './payment_promise')),
    payment_methods: seq.import(path.join(__dirname, './payment_methods')),
    payment_periods: seq.import(path.join(__dirname, './payment_periods')),
    payments: seq.import(path.join(__dirname, './payments')),
    payment_promise_receivables: seq.import(path.join(__dirname, './payment_promise_receivables')),
    payment_request_receivable: seq.import(path.join(__dirname, './payment_request_receivable')),
    payments_receivable: seq.import(path.join(__dirname, './payments_receivable')),
    payments_request: seq.import(path.join(__dirname, './payments_request')),
    permission_role: seq.import(path.join(__dirname, './permission_role')),
    periods: seq.import(path.join(__dirname, './periods')),
    permissions: seq.import(path.join(__dirname, './permissions')),
    receivables: seq.import(path.join(__dirname, './receivables')),
    plans: seq.import(path.join(__dirname, './plans')),
    promises_payment: seq.import(path.join(__dirname, './promises_payment')),
    role_user: seq.import(path.join(__dirname, './role_user')),
    roles: seq.import(path.join(__dirname, './roles')),
    receivables_notifications: seq.import(path.join(__dirname, './receivables_notifications')),
    recovery_goals: seq.import(path.join(__dirname, './recovery_goals')),
    sites: seq.import(path.join(__dirname, './sites')),
    sync_log: seq.import(path.join(__dirname, './sync_log')),
    transactions: seq.import(path.join(__dirname, './transactions')),
    sat_sync_webhook_log: seq.import(path.join(__dirname, './sat_sync_webhook_log')),
    user_notifications: seq.import(path.join(__dirname, './user_notifications')),
    user_sync_log: seq.import(path.join(__dirname, './user_sync_log')),
    transactions_files: seq.import(path.join(__dirname, './transactions_files')),
    user_sync_log_payments: seq.import(path.join(__dirname, './user_sync_log_payments')),
    users: seq.import(path.join(__dirname, './users')),
    webservices_log: seq.import(path.join(__dirname, './webservices_log')),
  };
  return tables;
};
