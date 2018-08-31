// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  account_statement_notifications:def.account_statement_notificationsModel;
  accounts:def.accountsModel;
  autologin_tokens:def.autologin_tokensModel;
  banks:def.banksModel;
  banxico_exchange_rate:def.banxico_exchange_rateModel;
  comercial_activities:def.comercial_activitiesModel;
  companies:def.companiesModel;
  company_intercom_data:def.company_intercom_dataModel;
  collection_policies:def.collection_policiesModel;
  company_site:def.company_siteModel;
  company_user:def.company_userModel;
  conflict_documents:def.conflict_documentsModel;
  company_payments:def.company_paymentsModel;
  contact_phone:def.contact_phoneModel;
  contacts:def.contactsModel;
  contpaqi_license_config_log:def.contpaqi_license_config_logModel;
  contact_email:def.contact_emailModel;
  credit_days:def.credit_daysModel;
  credit_notes:def.credit_notesModel;
  contracts:def.contractsModel;
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
  credit_report_shareholders:def.credit_report_shareholdersModel;
  credit_reports:def.credit_reportsModel;
  customers:def.customersModel;
  currencies:def.currenciesModel;
  customer_invites:def.customer_invitesModel;
  customers_without_logbook:def.customers_without_logbookModel;
  customers_pending_balance:def.customers_pending_balanceModel;
  customers_unassigned:def.customers_unassignedModel;
  distributor_levels:def.distributor_levelsModel;
  distributors:def.distributorsModel;
  discounts:def.discountsModel;
  dispersion_orders:def.dispersion_ordersModel;
  erps:def.erpsModel;
  extensions:def.extensionsModel;
  failed_jobs:def.failed_jobsModel;
  economic_sectors:def.economic_sectorsModel;
  history_assignments:def.history_assignmentsModel;
  history_invoices:def.history_invoicesModel;
  import_data_service_logs:def.import_data_service_logsModel;
  historial_deuda_comentarios:def.historial_deuda_comentariosModel;
  incidences:def.incidencesModel;
  invoice_json:def.invoice_jsonModel;
  jobs:def.jobsModel;
  incidence_reasons:def.incidence_reasonsModel;
  licences:def.licencesModel;
  license_payments:def.license_paymentsModel;
  licence_renewals:def.licence_renewalsModel;
  logbook:def.logbookModel;
  licenses_contpaqi:def.licenses_contpaqiModel;
  licenses_feraz:def.licenses_ferazModel;
  notification_rules:def.notification_rulesModel;
  notification_templates:def.notification_templatesModel;
  notifications:def.notificationsModel;
  logbook_payment:def.logbook_paymentModel;
  migrations:def.migrationsModel;
  notifications_config:def.notifications_configModel;
  notifications_customers:def.notifications_customersModel;
  notifications_sms:def.notifications_smsModel;
  notifications_templates:def.notifications_templatesModel;
  oauth_auth_codes:def.oauth_auth_codesModel;
  oauth_clients:def.oauth_clientsModel;
  oauth_personal_access_clients:def.oauth_personal_access_clientsModel;
  oauth_access_tokens:def.oauth_access_tokensModel;
  password_resets:def.password_resetsModel;
  pay_days:def.pay_daysModel;
  payment_concepts:def.payment_conceptsModel;
  oauth_refresh_tokens:def.oauth_refresh_tokensModel;
  payment_methods:def.payment_methodsModel;
  payment_periods:def.payment_periodsModel;
  payment_promise:def.payment_promiseModel;
  payment_formats:def.payment_formatsModel;
  payment_request_receivable:def.payment_request_receivableModel;
  payments:def.paymentsModel;
  payments_receivable:def.payments_receivableModel;
  payment_promise_receivables:def.payment_promise_receivablesModel;
  periods:def.periodsModel;
  permission_role:def.permission_roleModel;
  permissions:def.permissionsModel;
  payments_request:def.payments_requestModel;
  promises_payment:def.promises_paymentModel;
  receivables:def.receivablesModel;
  plans:def.plansModel;
  role_user:def.role_userModel;
  roles:def.rolesModel;
  receivables_notifications:def.receivables_notificationsModel;
  recovery_goals:def.recovery_goalsModel;
  sites:def.sitesModel;
  sync_log:def.sync_logModel;
  sat_sync_webhook_log:def.sat_sync_webhook_logModel;
  user_notifications:def.user_notificationsModel;
  transactions:def.transactionsModel;
  transactions_files:def.transactions_filesModel;
  users:def.usersModel;
  user_sync_log:def.user_sync_logModel;
  user_sync_log_payments:def.user_sync_log_paymentsModel;
  webservices_log:def.webservices_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    account_statement_notifications: seq.import(path.join(__dirname, './account_statement_notifications')),
    accounts: seq.import(path.join(__dirname, './accounts')),
    autologin_tokens: seq.import(path.join(__dirname, './autologin_tokens')),
    banks: seq.import(path.join(__dirname, './banks')),
    banxico_exchange_rate: seq.import(path.join(__dirname, './banxico_exchange_rate')),
    comercial_activities: seq.import(path.join(__dirname, './comercial_activities')),
    companies: seq.import(path.join(__dirname, './companies')),
    company_intercom_data: seq.import(path.join(__dirname, './company_intercom_data')),
    collection_policies: seq.import(path.join(__dirname, './collection_policies')),
    company_site: seq.import(path.join(__dirname, './company_site')),
    company_user: seq.import(path.join(__dirname, './company_user')),
    conflict_documents: seq.import(path.join(__dirname, './conflict_documents')),
    company_payments: seq.import(path.join(__dirname, './company_payments')),
    contact_phone: seq.import(path.join(__dirname, './contact_phone')),
    contacts: seq.import(path.join(__dirname, './contacts')),
    contpaqi_license_config_log: seq.import(path.join(__dirname, './contpaqi_license_config_log')),
    contact_email: seq.import(path.join(__dirname, './contact_email')),
    credit_days: seq.import(path.join(__dirname, './credit_days')),
    credit_notes: seq.import(path.join(__dirname, './credit_notes')),
    contracts: seq.import(path.join(__dirname, './contracts')),
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
    credit_report_shareholders: seq.import(path.join(__dirname, './credit_report_shareholders')),
    credit_reports: seq.import(path.join(__dirname, './credit_reports')),
    customers: seq.import(path.join(__dirname, './customers')),
    currencies: seq.import(path.join(__dirname, './currencies')),
    customer_invites: seq.import(path.join(__dirname, './customer_invites')),
    customers_without_logbook: seq.import(path.join(__dirname, './customers_without_logbook')),
    customers_pending_balance: seq.import(path.join(__dirname, './customers_pending_balance')),
    customers_unassigned: seq.import(path.join(__dirname, './customers_unassigned')),
    distributor_levels: seq.import(path.join(__dirname, './distributor_levels')),
    distributors: seq.import(path.join(__dirname, './distributors')),
    discounts: seq.import(path.join(__dirname, './discounts')),
    dispersion_orders: seq.import(path.join(__dirname, './dispersion_orders')),
    erps: seq.import(path.join(__dirname, './erps')),
    extensions: seq.import(path.join(__dirname, './extensions')),
    failed_jobs: seq.import(path.join(__dirname, './failed_jobs')),
    economic_sectors: seq.import(path.join(__dirname, './economic_sectors')),
    history_assignments: seq.import(path.join(__dirname, './history_assignments')),
    history_invoices: seq.import(path.join(__dirname, './history_invoices')),
    import_data_service_logs: seq.import(path.join(__dirname, './import_data_service_logs')),
    historial_deuda_comentarios: seq.import(path.join(__dirname, './historial_deuda_comentarios')),
    incidences: seq.import(path.join(__dirname, './incidences')),
    invoice_json: seq.import(path.join(__dirname, './invoice_json')),
    jobs: seq.import(path.join(__dirname, './jobs')),
    incidence_reasons: seq.import(path.join(__dirname, './incidence_reasons')),
    licences: seq.import(path.join(__dirname, './licences')),
    license_payments: seq.import(path.join(__dirname, './license_payments')),
    licence_renewals: seq.import(path.join(__dirname, './licence_renewals')),
    logbook: seq.import(path.join(__dirname, './logbook')),
    licenses_contpaqi: seq.import(path.join(__dirname, './licenses_contpaqi')),
    licenses_feraz: seq.import(path.join(__dirname, './licenses_feraz')),
    notification_rules: seq.import(path.join(__dirname, './notification_rules')),
    notification_templates: seq.import(path.join(__dirname, './notification_templates')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    logbook_payment: seq.import(path.join(__dirname, './logbook_payment')),
    migrations: seq.import(path.join(__dirname, './migrations')),
    notifications_config: seq.import(path.join(__dirname, './notifications_config')),
    notifications_customers: seq.import(path.join(__dirname, './notifications_customers')),
    notifications_sms: seq.import(path.join(__dirname, './notifications_sms')),
    notifications_templates: seq.import(path.join(__dirname, './notifications_templates')),
    oauth_auth_codes: seq.import(path.join(__dirname, './oauth_auth_codes')),
    oauth_clients: seq.import(path.join(__dirname, './oauth_clients')),
    oauth_personal_access_clients: seq.import(path.join(__dirname, './oauth_personal_access_clients')),
    oauth_access_tokens: seq.import(path.join(__dirname, './oauth_access_tokens')),
    password_resets: seq.import(path.join(__dirname, './password_resets')),
    pay_days: seq.import(path.join(__dirname, './pay_days')),
    payment_concepts: seq.import(path.join(__dirname, './payment_concepts')),
    oauth_refresh_tokens: seq.import(path.join(__dirname, './oauth_refresh_tokens')),
    payment_methods: seq.import(path.join(__dirname, './payment_methods')),
    payment_periods: seq.import(path.join(__dirname, './payment_periods')),
    payment_promise: seq.import(path.join(__dirname, './payment_promise')),
    payment_formats: seq.import(path.join(__dirname, './payment_formats')),
    payment_request_receivable: seq.import(path.join(__dirname, './payment_request_receivable')),
    payments: seq.import(path.join(__dirname, './payments')),
    payments_receivable: seq.import(path.join(__dirname, './payments_receivable')),
    payment_promise_receivables: seq.import(path.join(__dirname, './payment_promise_receivables')),
    periods: seq.import(path.join(__dirname, './periods')),
    permission_role: seq.import(path.join(__dirname, './permission_role')),
    permissions: seq.import(path.join(__dirname, './permissions')),
    payments_request: seq.import(path.join(__dirname, './payments_request')),
    promises_payment: seq.import(path.join(__dirname, './promises_payment')),
    receivables: seq.import(path.join(__dirname, './receivables')),
    plans: seq.import(path.join(__dirname, './plans')),
    role_user: seq.import(path.join(__dirname, './role_user')),
    roles: seq.import(path.join(__dirname, './roles')),
    receivables_notifications: seq.import(path.join(__dirname, './receivables_notifications')),
    recovery_goals: seq.import(path.join(__dirname, './recovery_goals')),
    sites: seq.import(path.join(__dirname, './sites')),
    sync_log: seq.import(path.join(__dirname, './sync_log')),
    sat_sync_webhook_log: seq.import(path.join(__dirname, './sat_sync_webhook_log')),
    user_notifications: seq.import(path.join(__dirname, './user_notifications')),
    transactions: seq.import(path.join(__dirname, './transactions')),
    transactions_files: seq.import(path.join(__dirname, './transactions_files')),
    users: seq.import(path.join(__dirname, './users')),
    user_sync_log: seq.import(path.join(__dirname, './user_sync_log')),
    user_sync_log_payments: seq.import(path.join(__dirname, './user_sync_log_payments')),
    webservices_log: seq.import(path.join(__dirname, './webservices_log')),
  };
  return tables;
};
